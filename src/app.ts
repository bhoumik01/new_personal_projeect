import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler";
import { cloudflareOnly } from "./middleware/cloudflareOnly";
import cron from "node-cron";
import {
  globalRateLimiter,
  apiRateLimiter,
  sensitiveRateLimiter,
  webhookRateLimiter,
} from "./middleware/rateLimiter";
import paymentRoutes from "./routes/payment.routes";
import orderRoutes from "./routes/order.routes";
import ssmRoutes from "./routes/ssm.routes";
import bannerRoutes from "./routes/banner.routes";
import offerRoutes from "./routes/offer.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import internalRoutes from "./routes/internal.routes";
import { ApiResponse } from "./types";
import { requestTimer } from "./middleware/diagnostics.middleware";

const app = express();

// Trust Render's (and proxies') X-Forwarded-For header so rate limiters
// see the real client IP instead of Render's internal load balancer IP.
app.set("trust proxy", 1);

// ========================
// Security & Diagnostics
// ========================
app.use(helmet());
app.use(requestTimer);

// ========================
// Cloudflare Guard — block direct Render URL access
// ========================
// Rejects requests that don't carry Cloudflare's CF-Connecting-IP header.
// Only active in production; dev traffic passes through freely.
// app.use(cloudflareOnly);
// ========================
cron.schedule(
  "0 0 31 3 *",
  async () => {
    console.log("Runs every year on 31st March at midnight");
    try {
      await prisma.$transaction(async (p) => {
        await p.payment.deleteMany();
        await p.smmOrder.deleteMany();
        await p.order.deleteMany();
      });
    } catch (error) {
      console.error("Error in scheduled task:", error);
    }
  },
  {
    timezone: "Asia/Kolkata",
  },
);

// Global DDoS / Rate Limiting
// ========================
// Applied first — before any parsing or routing — to drop floods early.
app.use(globalRateLimiter);
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") ?? "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// ========================
// Request Parsing
// ========================
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ========================
// Logging
// ========================
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// ========================
// Health Check
// ========================
app.get("/health", (_req, res) => {
  const used = process.memoryUsage();
  const response: ApiResponse = {
    success: true,
    message: "Server is healthy",
    data: {
      status: "ok",
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
      memory: {
        heapUsed: `${(used.heapUsed / 1024 / 1024).toFixed(2)} MB`,
        heapTotal: `${(used.heapTotal / 1024 / 1024).toFixed(2)} MB`,
        rss: `${(used.rss / 1024 / 1024).toFixed(2)} MB`,
      },
      uptime: `${process.uptime().toFixed(2)}s`,
    },
  };
  res.json(response);
});

// ========================
// API Routes
// ========================
import { subscribeToOrderStatus } from "./controllers/sse.controller";
import { prisma } from "../lib/initiatePrisma";
// Sensitive endpoints: orders & payments — tight limit (20 req / 10 min)
app.use("/api/payments", webhookRateLimiter, paymentRoutes);
app.use("/api/orders", sensitiveRateLimiter, orderRoutes);
// General API — moderate limit (60 req / min)
app.use("/api/ssm", apiRateLimiter, ssmRoutes);
app.use("/api/banners", apiRateLimiter, bannerRoutes);
app.use("/api/offers", apiRateLimiter, offerRoutes);
app.use("/api/dashboard", apiRateLimiter, dashboardRoutes);
app.use("/api/internal", internalRoutes);
app.get("/api/status/stream/:id", subscribeToOrderStatus);

// ========================
// 404 Handler
// ========================
app.use((_req, res) => {
  const response: ApiResponse = {
    success: false,
    message: "Route not found",
  };
  res.status(404).json(response);
});

// ========================
// Global Error Handler
// ========================
app.use(errorHandler);

export default app;
