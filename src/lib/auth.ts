import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.id = user.id;
        token.username = (user as { username?: string }).username;
        token.balance  = (user as { balance?: number }).balance;
        token.isAdmin = (user as { email?: string }).email === process.env.ADMIN_EMAIL;
      }
      if (trigger === "update") {
        const fresh = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { balance: true, username: true, email: true },
        });
        if (fresh) {
          token.balance = fresh.balance;
          token.username = fresh.username;
          token.isAdmin = fresh.email === process.env.ADMIN_EMAIL;
        }
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id       = (token.id       as string)  ?? "";
        session.user.username = (token.username as string)  ?? "";
        session.user.balance  = (token.balance  as number)  ?? 0;
        session.user.isAdmin  = (token.isAdmin  as boolean) ?? false;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });
        if (!user) return null;
        const valid = await bcrypt.compare(credentials.password as string, user.password);
        if (!valid) return null;
        return user;
      },
    }),
  ],
});
