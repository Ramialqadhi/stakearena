export const dynamic = "force-dynamic";

import Link from "next/link";
import { auth } from "@/lib/auth";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import {
  UserPlus,
  Gamepad2,
  Wallet,
  Zap,
  CheckSquare,
  Trophy,
  ArrowDownToLine,
  ArrowRight,
  Swords,
  Shield,
  Lock,
  Video,
  AlertTriangle,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up in seconds with just your email. Your profile tracks your wins, losses, and earnings — building your reputation as a competitor.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.18)",
    border: "rgba(139,92,246,0.3)",
    loggedInHide: true,
  },
  {
    number: "02",
    icon: Gamepad2,
    title: "Add Your Game Profile",
    description:
      "Go to your Profile and add your Clash Royale player tag once. It auto-fills in every match — no re-entering credentials each time.",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.15)",
    border: "rgba(6,182,212,0.25)",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Deposit Funds",
    description:
      "Add money to your StakeArena wallet securely via Stripe. All transactions are encrypted and funds are held safely until your match concludes.",
    color: "#00ff88",
    glow: "rgba(0,255,136,0.15)",
    border: "rgba(0,255,136,0.25)",
  },
  {
    number: "04",
    icon: Swords,
    title: "Find a Match",
    description:
      "Use Quick Match to get instantly paired with an opponent at your stake ($5, $15, or $25). Or create a Custom Challenge and share the link directly with a specific opponent.",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    number: "05",
    icon: CheckSquare,
    title: "Confirm Ready",
    description:
      "Both players add each other in Clash Royale, check the confirmation box, then click Ready. The match timer only starts once both players are ready — no surprise forfeits.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.15)",
    border: "rgba(139,92,246,0.25)",
  },
  {
    number: "06",
    icon: Video,
    title: "Record Your Gameplay",
    description:
      "You are required to record your screen or gameplay for the full duration of every match. Recordings may be requested as evidence in a dispute — failure to provide one may result in the match being awarded to your opponent.",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    border: "rgba(245,158,11,0.45)",
    warning: true,
  },
  {
    number: "07",
    icon: Trophy,
    title: "Play & Win — Auto Verified",
    description:
      "Play your match in Clash Royale. Our system automatically detects the result via the Clash Royale API and instantly pays the winner. No manual submissions, no disputes over results — just pure skill.",
    color: "#00ff88",
    glow: "rgba(0,255,136,0.2)",
    border: "rgba(0,255,136,0.3)",
  },
  {
    number: "08",
    icon: ArrowDownToLine,
    title: "Withdraw Your Winnings",
    description:
      "Request a withdrawal via Apple Pay, Cash App, Zelle, or Venmo. Minimum withdrawal is $25 with a $1.99 processing fee. Requests are processed within 24 hours.",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.15)",
    border: "rgba(6,182,212,0.25)",
  },
];

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: "Secure Payments",
    body: "All deposits are processed through Stripe with full encryption. Your payment details never touch our servers.",
  },
  {
    icon: Zap,
    title: "Auto Result Detection",
    body: "Results are verified automatically via the Clash Royale API. The winner is paid instantly with no manual submissions required.",
  },
  {
    icon: Lock,
    title: "Dispute Protection",
    body: "In rare cases where the system cannot verify a result, our admin team reviews the evidence and makes a fair ruling within 24 hours.",
  },
];

export default async function HowItWorksPage() {
  const session = await auth();
  const isLoggedIn = !!session?.user?.id;
  const steps = isLoggedIn ? STEPS.filter((s) => !s.loggedInHide) : STEPS;

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 hero-bg" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.06)] text-[#00ff88] text-xs font-semibold mb-6 tracking-wide uppercase">
              Clash Royale · Real Money · Auto Verified
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#f0f0f5] mb-5 leading-tight">
              Skill-based wagering,{" "}
              <span className="gradient-text-green">instant payouts</span>
            </h1>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto mb-8">
              StakeArena is a peer-to-peer wagering platform for Clash Royale. Two players stake funds, play their match, and our system automatically verifies the result. Winner takes{" "}
              <span className="text-[#00ff88] font-semibold">90% of the pot</span> — no manual submissions, no disputes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {isLoggedIn ? (
                <Link href="/challenges/new">
                  <Button variant="primary" size="lg" className="font-bold">
                    <Swords className="w-4 h-4 mr-2" />
                    Create Challenge
                  </Button>
                </Link>
              ) : (
                <Link href="/register">
                  <Button variant="primary" size="lg" className="font-bold">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
              <Link href="/quickmatch">
                <Button variant="outline" size="lg">
                  <Zap className="w-4 h-4 mr-2" />
                  Quick Match
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-[#f0f0f5] mb-2">
              How it works in{" "}
              <span className="gradient-text-purple">{steps.length} steps</span>
            </h2>
            <p className="text-sm text-[#6b7280]">From sign-up to payout in minutes</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(139,92,246,0.4)] via-[rgba(0,255,136,0.3)] to-transparent hidden sm:block" />

            <div className="flex flex-col gap-5">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const displayNumber = String(i + 1).padStart(2, "0");
                const isWarning = step.warning === true;
                return (
                  <div
                    key={step.number}
                    className={`relative flex items-start gap-5 rounded-2xl p-5 sm:p-6 border transition-all duration-200 ${
                      isWarning
                        ? "bg-[rgba(245,158,11,0.04)] hover:bg-[rgba(245,158,11,0.07)]"
                        : "glass hover:bg-[rgba(255,255,255,0.02)]"
                    }`}
                    style={{ borderColor: step.border, boxShadow: `0 0 20px ${step.glow}` }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                        style={{
                          background: `radial-gradient(circle at 40% 40%, ${step.glow}, transparent)`,
                          border: `1px solid ${step.border}`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                      <span className="text-[11px] font-black" style={{ color: step.color }}>
                        {displayNumber}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="text-base sm:text-lg font-black text-[#f0f0f5]">
                          {step.title}
                        </h3>
                        {isWarning && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.4)] text-[#f59e0b] uppercase tracking-wide">
                            <AlertTriangle className="w-3 h-3" />
                            Mandatory
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed text-[#a1a1aa]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Payout breakdown */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="glass rounded-2xl border border-[rgba(0,255,136,0.2)] p-6 sm:p-8">
            <h2 className="text-xl font-black text-[#f0f0f5] mb-2 text-center">
              Payout Breakdown
            </h2>
            <p className="text-sm text-[#6b7280] text-center mb-8">Example: $25 stake match</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "You stake", value: "$25.00", color: "#f0f0f5", sub: "Locked at match start" },
                { label: "Opponent stakes", value: "$25.00", color: "#f0f0f5", sub: "Locked at match start" },
                { label: "Total prize pool", value: "$50.00", color: "#fbbf24", sub: "Held in escrow" },
              ].map((item) => (
                <div key={item.label} className="bg-[#1a1a24] rounded-xl p-4 text-center border border-[#2a2a3a]">
                  <div className="text-xs text-[#6b7280] mb-1">{item.label}</div>
                  <div className="text-2xl font-black mb-1" style={{ color: item.color }}>{item.value}</div>
                  <div className="text-[10px] text-[#6b7280]">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="mb-5">
              <div className="flex rounded-full overflow-hidden h-6 mb-2.5">
                <div className="bg-[#00ff88] flex-[9] flex items-center justify-center">
                  <span className="text-[11px] font-black text-[#0a0a0f]">90% → Winner ($45.00)</span>
                </div>
                <div className="bg-[#8b5cf6] flex-[1] flex items-center justify-center">
                  <span className="text-[10px] font-black text-white">10%</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[#6b7280]">
                <span><span className="text-[#00ff88] font-bold">$45.00</span> paid to winner instantly</span>
                <span><span className="text-[#8b5cf6] font-bold">$5.00</span> platform rake</span>
              </div>
            </div>

            <div className="border-t border-[#1e1e2e] pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs text-[#6b7280]">
              <div>No deposit fees</div>
              <div>$1.99 withdrawal fee · $25 minimum</div>
              <div>10% rake is the only other fee</div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-xl font-black text-[#f0f0f5] text-center mb-8">
            Built for trust
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TRUST_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass rounded-xl border border-[#1e1e2e] p-5">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.2)] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  <h3 className="font-bold text-[#f0f0f5] mb-1.5">{item.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        {!isLoggedIn && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="glass rounded-2xl border border-[rgba(0,255,136,0.2)] p-8 text-center"
              style={{ boxShadow: "0 0 40px rgba(0,255,136,0.06)" }}>
              <h2 className="text-2xl font-black text-[#f0f0f5] mb-3">
                Ready to compete?
              </h2>
              <p className="text-[#6b7280] mb-6 max-w-md mx-auto text-sm">
                Create your free account, add $5 or more, and jump into your first match in under 5 minutes.
              </p>
              <Link href="/register">
                <Button variant="primary" size="lg" className="font-bold">
                  Create Free Account
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </div>
  );
}
