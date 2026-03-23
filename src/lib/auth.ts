import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.id = user.id;
        token.username = (user as any).username;
        token.balance = (user as any).balance;
        token.isAdmin = (user as any).email === process.env.ADMIN_EMAIL;
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
        session.user.id = token.id as string;
        (session.user as any).username = token.username;
        (session.user as any).balance = token.balance;
        (session.user as any).isAdmin = token.isAdmin;
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
