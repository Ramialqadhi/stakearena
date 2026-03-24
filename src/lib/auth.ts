import { getSession } from "@/lib/session";

/** Drop-in replacement for NextAuth's auth() — reads the custom JWT cookie */
export async function auth() {
  const user = await getSession();
  if (!user) return null;
  return { user };
}

// Kept for any legacy imports — no-ops
export const signIn  = () => { throw new Error("Use /api/auth/login instead"); };
export const signOut = () => { throw new Error("Use /api/auth/logout instead"); };
export const handlers = {};
