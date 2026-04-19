import { prisma } from '../lib/initiatePrisma';
import bcrypt from 'bcrypt';

async function main() {
  const email = 'user@user.com';
  const password = 'User@123';
  const name = 'Standard User';

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = await prisma.adminAccount.upsert({
    where: { email },
    update: {
      passwordHash,
      role: 'USER',
      name,
    },
    create: {
      email,
      passwordHash,
      role: 'USER',
      name,
    },
  });

  console.log('✅ User account created/updated:');
  console.log('   Email:', user.email);
  console.log('   Password:', password);
  console.log('   Role:', user.role);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding user:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
