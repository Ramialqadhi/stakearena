import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { PlayerCounter } from "@/components/layout/PlayerCounter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StakeArena - Stake. Play. Win.",
  description: "Challenge players worldwide in 1v1 gaming for real money",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0f] text-[#f0f0f5] antialiased`}>
        <SessionProvider>{children}</SessionProvider>
        <PlayerCounter />
      </body>
    </html>
  );
}
