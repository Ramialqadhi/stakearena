"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { Wallet, ChevronDown, LogOut, LayoutDashboard, ShieldCheck, Zap, Gamepad2 } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

export function Navbar() {
  const { data: session, update } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  // Refresh balance from DB on every page mount so the JWT never shows stale balance
  useEffect(() => {
    update({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const username = session?.user?.username ?? session?.user?.name;
  const balance  = session?.user?.balance ?? 0;
  const isAdmin  = session?.user?.isAdmin === true;

  return (
    <nav className="glass sticky top-0 z-50 border-b border-[#1e1e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" />

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/quickmatch"
              className="flex items-center gap-1.5 text-sm font-bold text-[#00ff88] hover:text-[#00cc6a] transition-colors"
            >
              <Zap className="w-3.5 h-3.5" />
              Quick Match
            </Link>
            <Link
              href="/challenges"
              className="text-sm text-[#a1a1aa] hover:text-[#00ff88] transition-colors"
            >
              Challenges
            </Link>
            <Link
              href="/leaderboard"
              className="text-sm text-[#a1a1aa] hover:text-[#00ff88] transition-colors"
            >
              Leaderboard
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm text-[#a1a1aa] hover:text-[#00ff88] transition-colors"
            >
              How It Works
            </Link>
          </div>

          {/* Auth / Wallet */}
          <div className="flex items-center gap-3">
            {session ? (
              <>
                <div className="hidden sm:flex items-center gap-2 glass px-3 py-1.5 rounded-lg">
                  <Wallet className="w-4 h-4 text-[#00ff88]" />
                  <span className="text-sm font-semibold text-[#00ff88]">
                    ${Number(balance).toFixed(2)}
                  </span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg cursor-pointer hover:border-[rgba(0,255,136,0.3)] transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00ff88] to-[#8b5cf6] flex items-center justify-center text-xs font-bold text-[#0a0a0f]">
                      {username?.[0]?.toUpperCase() ?? "U"}
                    </div>
                    <span className="text-sm text-[#f0f0f5] hidden sm:block">{username}</span>
                    <ChevronDown className="w-3 h-3 text-[#6b7280]" />
                  </button>
                  {menuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 glass rounded-xl border border-[#1e1e2e] py-1 z-50">
                      <Link
                        href="/dashboard"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-[#a1a1aa] hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.05)] transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </Link>
                      <Link
                        href="/wallet"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-[#a1a1aa] hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.05)] transition-colors"
                      >
                        <Wallet className="w-4 h-4" />
                        Wallet
                      </Link>
                      <Link
                        href="/profile"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-[#a1a1aa] hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.05)] transition-colors"
                      >
                        <Gamepad2 className="w-4 h-4" />
                        Game Profiles
                      </Link>
                      {isAdmin && (
                        <Link
                          href="/admin"
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-[#a1a1aa] hover:text-[#8b5cf6] hover:bg-[rgba(139,92,246,0.05)] transition-colors"
                        >
                          <ShieldCheck className="w-4 h-4" />
                          Admin
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          signOut({ callbackUrl: "/" });
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#a1a1aa] hover:text-red-400 hover:bg-[rgba(239,68,68,0.05)] transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
