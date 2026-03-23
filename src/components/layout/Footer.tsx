import React from "react";
import Link from "next/link";
import { Twitter, Youtube, MessageSquare } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              The premier platform for skill-based wagering in esports and competitive gaming.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-[#6b7280] hover:text-[#00ff88] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-[#6b7280] hover:text-[#8b5cf6] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-[#6b7280] hover:text-[#ef4444] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-[#f0f0f5] mb-4 text-sm uppercase tracking-wide">
              Platform
            </h4>
            <ul className="space-y-2">
              {["Challenges", "Leaderboard", "Games", "Live Matches"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#6b7280] hover:text-[#00ff88] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-[#f0f0f5] mb-4 text-sm uppercase tracking-wide">
              Support
            </h4>
            <ul className="space-y-2">
              {["How It Works", "FAQ", "Contact Us", "Dispute Resolution"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#6b7280] hover:text-[#00ff88] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[#f0f0f5] mb-4 text-sm uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Responsible Gaming"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-[#6b7280] hover:text-[#00ff88] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1e1e2e] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6b7280]">
            &copy; {new Date().getFullYear()} StakeArena. All rights reserved.
          </p>
          <p className="text-xs text-[#6b7280]">
            Play responsibly. 18+ only. Skill-based wagering only.
          </p>
        </div>
      </div>
    </footer>
  );
}
