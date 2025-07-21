import { PrismaClient } from "@prisma/client";

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is not defined!");
  process.exit(1);
}

const prisma = new PrismaClient();
export default prisma;
