import { prisma } from '../lib/initiatePrisma';
import bcrypt from 'bcrypt';

async function main() {
  const salt = await bcrypt.genSalt(10);

  const admins = [
    {
      email: 'bhoumik01@gmail.com',
      password: '1234567890',
      name: 'Bhoumik Admin',
      role: 'ADMIN',
      isVisible: false
    }
  ];

  for (const acc of admins) {
    const passwordHash = await bcrypt.hash(acc.password, salt);

    const admin = await prisma.adminAccount.upsert({
      where: { email: acc.email },
      update: {
        passwordHash,
        role: acc.role as any,
        name: acc.name,
        isVisible: acc.isVisible,
      },
      create: {
        email: acc.email,
        passwordHash,
        role: acc.role as any,
        name: acc.name,
        isVisible: acc.isVisible,
      },
    });

    console.log(`✅ Admin account ${acc.isVisible ? 'VISIBLE' : 'HIDDEN'}:`);
    console.log('   Email:', admin.email);
    console.log('   Password:', acc.password);
    console.log('   Role:', admin.role);
  }
}

main()
  .catch((e) => {
    console.error('❌ Error seeding admin:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
