import { prisma } from '../lib/initiatePrisma';
import bcrypt from 'bcrypt';

async function main() {
  const email = 'admin@admin.com';
  const password = 'Admin@123';
  const name = 'Super Admin';

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const admin = await prisma.adminAccount.upsert({
    where: { email },
    update: {
      passwordHash,
      role: 'ADMIN',
      name,
    },
    create: {
      email,
      passwordHash,
      role: 'ADMIN',
      name,
    },
  });

  console.log('✅ Admin account created/updated:');
  console.log('   Email:', admin.email);
  console.log('   Password:', password);
  console.log('   Role:', admin.role);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding admin:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
