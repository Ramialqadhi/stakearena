import Link from "next/link";
import { auth } from "@/lib/auth";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import {
  UserPlus,
  Wallet,
  Swords,
  Gamepad2,
  ClipboardCheck,
  Trophy,
  ArrowRight,
  Shield,
  Zap,
  Lock,
  Video,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create an Account",
    description:
      "Sign up in seconds with just your email. Your profile tracks your wins, losses, earnings, and win rate — building your reputation as a competitor.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.2)",
    border: "rgba(139,92,246,0.25)",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Deposit Funds",
    description:
      "Add money to your StakeArena wallet securely via Stripe. All transactions are encrypted and funds are held safely until a match concludes.",
    color: "#00ff88",
    glow: "rgba(0,255,136,0.15)",
    border: "rgba(0,255,136,0.25)",
  },
  {
    number: "03",
    icon: Swords,
    title: "Create or Accept a Challenge",
    description:
      "Set your stake amount, pick a game, and post an open challenge — or browse existing ones and accept a match instantly. Share your challenge link directly with a specific opponent.",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    number: "04",
    icon: Gamepad2,
    title: "Play the Match",
    description:
      "Once both players have staked their funds the match goes live. Head into your game, play your best, and screenshot or record your result as proof.",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.15)",
    border: "rgba(6,182,212,0.25)",
  },
  {
    number: "04b",
    icon: Video,
    title: "Record Your Gameplay",
    description:
      "You are required to record your screen or gameplay for the full duration of every match. Recordings may be requested as evidence in the event of a dispute — failure to provide one may result in the match being awarded to your opponent.",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    border: "rgba(245,158,11,0.4)",
    warning: true,
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Submit the Result",
    description:
      "Both players independently submit who won. If you agree, the payout triggers automatically. If results conflict, both players upload evidence and an admin reviews within 24 hours.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.15)",
    border: "rgba(139,92,246,0.25)",
  },
  {
    number: "06",
    icon: Trophy,
    title: "Winner Gets Paid",
    description:
      "The winner receives 90% of the total pot directly to their wallet, instantly. The platform keeps a 10% rake. Withdraw your winnings at any time via PayPal, Venmo, or crypto.",
    color: "#00ff88",
    glow: "rgba(0,255,136,0.2)",
    border: "rgba(0,255,136,0.3)",
  },
];

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: "Secure Payments",
    body: "All deposits and withdrawals are processed through Stripe with full encryption. Your payment details never touch our servers.",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    body: "When both players agree on a result, funds are released immediately — no waiting, no manual processing.",
  },
  {
    icon: Lock,
    title: "Dispute Protection",
    body: "If results don't match, our admin team reviews submitted evidence and makes a fair ruling. Funds are held securely until resolved.",
  },
];

export default async function HowItWorksPage() {
  const session = await auth();
  const isLoggedIn = !!session?.user?.id;
  const steps = isLoggedIn ? STEPS.slice(1) : STEPS;
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 hero-bg" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.06)] text-[#00ff88] text-xs font-semibold mb-6">
              Simple. Fair. Instant.
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#f0f0f5] mb-5 leading-tight">
              Skill-based gaming,{" "}
              <span className="gradient-text-green">real money</span> on the line
            </h1>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto mb-8">
              StakeArena is a peer-to-peer wagering platform. Two players agree on a stake,
              play their game, and the winner takes 90% of the pot. No house edge on results —
              just pure skill.
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
                    Start Playing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
              <Link href="/challenges">
                <Button variant="outline" size="lg">
                  Browse Challenges
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-black text-[#f0f0f5] text-center mb-12">
            How it works in{" "}
            <span className="gradient-text-purple">{steps.length} steps</span>
          </h2>

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 1;
              const displayNumber = String(i + 1).padStart(2, "0");
              const isWarning = (step as any).warning === true;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col sm:flex-row items-start gap-5 rounded-2xl p-6 border transition-colors duration-200 ${isWarning ? "bg-[rgba(245,158,11,0.05)] hover:bg-[rgba(245,158,11,0.08)]" : "glass hover:bg-[rgba(255,255,255,0.02)]"} ${isEven ? "sm:flex-row-reverse" : ""}`}
                  style={{ borderColor: step.border, boxShadow: `0 0 24px ${step.glow}` }}
                >
                  {/* Icon block */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `radial-gradient(circle at 40% 40%, ${step.glow.replace("0.15", "0.25").replace("0.18", "0.3").replace("0.2", "0.3")}, ${step.glow.replace("0.15", "0.08").replace("0.18", "0.08").replace("0.2", "0.1")})`, border: `1px solid ${step.border}` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    <span className="text-xs font-black" style={{ color: step.color }}>{displayNumber}</span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "sm:text-right" : ""}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-black text-[#f0f0f5]">{step.title}</h3>
                      {isWarning && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.4)] text-[#f59e0b] uppercase tracking-wide">
                          Mandatory
                        </span>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${isWarning ? "text-[#a1a1aa]" : "text-[#6b7280]"}`}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Payout breakdown */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="glass rounded-2xl border border-[rgba(0,255,136,0.2)] p-8">
            <h2 className="text-xl font-black text-[#f0f0f5] mb-6 text-center">
              Payout Breakdown
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Player A stakes", value: "$50.00", color: "#f0f0f5", sub: "Locked at challenge creation" },
                { label: "Player B stakes", value: "$50.00", color: "#f0f0f5", sub: "Locked when challenge accepted" },
                { label: "Total prize pool", value: "$100.00", color: "#fbbf24", sub: "Held securely in escrow" },
              ].map((item) => (
                <div key={item.label} className="bg-[#1a1a24] rounded-xl p-4 text-center border border-[#2a2a3a]">
                  <div className="text-xs text-[#6b7280] mb-1">{item.label}</div>
                  <div className="text-2xl font-black mb-1" style={{ color: item.color }}>{item.value}</div>
                  <div className="text-[10px] text-[#6b7280]">{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Split bar */}
            <div className="mb-4">
              <div className="flex rounded-full overflow-hidden h-5 mb-2">
                <div className="bg-[#00ff88] flex-[9] flex items-center justify-center">
                  <span className="text-[10px] font-black text-[#0a0a0f]">90% → Winner</span>
                </div>
                <div className="bg-[#8b5cf6] flex-[1] flex items-center justify-center">
                  <span className="text-[10px] font-black text-white">10%</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[#6b7280]">
                <span><span className="text-[#00ff88] font-bold">$90.00</span> paid to winner</span>
                <span><span className="text-[#8b5cf6] font-bold">$10.00</span> platform rake</span>
              </div>
            </div>

            <p className="text-center text-xs text-[#6b7280]">
              The 10% rake is the only fee. No deposit fees, no withdrawal fees, no hidden charges.
            </p>
          </div>
        </section>

        {/* Trust section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
                  <h3 className="font-bold text-[#f0f0f5] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </section>


      </main>
    </div>
  );
}
