import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Define default user data
  const defaultUser: User = {
    id: 1,
    name: "Sara John",
    role: "admin"
  }

  await prisma.user.create({
    data: defaultUser
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });