import { PrismaClient } from "@/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const { Pool } = pg;

function createPrismaClient() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  // Cast to any to avoid @types/pg version mismatch between top-level and adapter's bundled types
  const adapter = new PrismaPg(pool as any);
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Guard against stale cached client (e.g. after a schema change + prisma generate
// while the dev server is running). The instanceof check detects when the cached
// instance was created from an older generated PrismaClient class — after
// `prisma generate` runs and Next.js re-imports the module, the class reference
// changes so old instances fail instanceof and a fresh client is built.
const cached = globalForPrisma.prisma;
export const prisma =
  cached instanceof PrismaClient &&
  (cached as any).chatMessage &&
  (cached as any).matchmakingQueue
    ? cached
    : createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
