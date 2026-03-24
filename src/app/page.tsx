import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GameCard } from "@/components/games/GameCard";
import { SUPPORTED_GAMES } from "@/types";
import {
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  Users,
  DollarSign,
  Activity,
  Swords,
  Trophy,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-bg relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[rgba(0,255,136,0.05)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[rgba(139,92,246,0.08)] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="gradient-text-hero">Stake.</span>
            <br />
            <span className="text-[#f0f0f5]">Play.</span>
            <br />
            <span className="gradient-text-green">Win.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed">
            Challenge players worldwide in your favorite games. Stake real money,
            prove your skills, and walk away with the prize. No luck — just pure
            skill.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button variant="primary" size="lg" pulse className="min-w-[200px] font-black text-lg">
                Start Playing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/challenges">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Browse Challenges
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mt-12 text-sm text-[#6b7280]">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#00ff88]" />
              Secure Escrow
            </span>
            <span className="text-[#1e1e2e]">|</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#00ff88]" />
              Instant Payouts
            </span>
            <span className="text-[#1e1e2e]">|</span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#00ff88]" />
              99.9% Uptime
            </span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-[#1e1e2e] bg-[#12121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, value: "10,000+", label: "Active Players", color: "#00ff88" },
              { icon: DollarSign, value: "$500K+", label: "Total Paid Out", color: "#00ff88" },
              { icon: Swords, value: "50,000+", label: "Challenges Played", color: "#8b5cf6" },
              { icon: Activity, value: "99.9%", label: "Platform Uptime", color: "#8b5cf6" },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5 mb-1" style={{ color }} />
                <span className="text-2xl font-black" style={{ color }}>{value}</span>
                <span className="text-sm text-[#6b7280]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#f0f0f5] mb-4">
            Why Choose{" "}
            <span className="gradient-text-green">StakeArena</span>?
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Built for competitive gamers who want to put real stakes on their skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Instant Challenges",
              description:
                "Create or join challenges in seconds. Share your unique link and get matched instantly with opponents ready to play.",
              color: "#00ff88",
              glow: "green" as const,
            },
            {
              icon: Shield,
              title: "Real Stakes",
              description:
                "Put real money on the line with our secure escrow system. Funds are held safely until the match is verified and resolved.",
              color: "#8b5cf6",
              glow: "purple" as const,
            },
            {
              icon: TrendingUp,
              title: "Secure Payouts",
              description:
                "Winners receive instant payouts after match confirmation. Our dispute resolution system ensures fair outcomes every time.",
              color: "#00ff88",
              glow: "green" as const,
            },
          ].map(({ icon: Icon, title, description, color, glow }) => (
            <Card key={title} glow={glow} hover className="flex flex-col gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div>
                <h3 className="font-bold text-[#f0f0f5] text-lg mb-2">{title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Supported Games */}
      <section className="bg-[#0d0d14] border-y border-[#1e1e2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#f0f0f5] mb-4">
              Supported{" "}
              <span className="gradient-text-purple">Games</span>
            </h2>
            <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
              Compete across the hottest titles. More games added every month.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SUPPORTED_GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/challenges">
              <Button variant="outline" size="md">
                Browse Challenges
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#f0f0f5] mb-4">
            How It{" "}
            <span className="gradient-text-green">Works</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Three simple steps to start winning real money on your gaming skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#00ff88] to-[#8b5cf6]" />

          {[
            {
              step: "01",
              icon: Trophy,
              title: "Create a Challenge",
              description:
                "Choose your game, set the stake amount, and generate your unique challenge link. Share it with your opponent.",
              color: "#00ff88",
            },
            {
              step: "02",
              icon: Swords,
              title: "Play the Match",
              description:
                "Both players confirm and stake their funds. Play the match in your chosen game and submit your results.",
              color: "#8b5cf6",
            },
            {
              step: "03",
              icon: DollarSign,
              title: "Collect Your Winnings",
              description:
                "Results are verified and the winner receives the full prize (minus our small platform fee) instantly.",
              color: "#00ff88",
            },
          ].map(({ step, icon: Icon, title, description, color }, i) => (
            <div key={step} className="relative flex flex-col items-center text-center gap-4">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center relative z-10 glass"
                style={{ border: `2px solid ${color}50`, boxShadow: `0 0 30px ${color}20` }}
              >
                <Icon className="w-8 h-8" style={{ color }} />
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center text-[#0a0a0f]"
                  style={{ backgroundColor: color }}
                >
                  {i + 1}
                </span>
              </div>
              <div>
                <div className="text-xs font-bold text-[#6b7280] tracking-widest mb-1">
                  STEP {step}
                </div>
                <h3 className="font-bold text-[#f0f0f5] text-xl mb-2">{title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs mx-auto">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 border-t border-[#1e1e2e]">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,255,136,0.05)] via-transparent to-[rgba(139,92,246,0.08)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to{" "}
            <span className="gradient-text-hero">Prove Your Skill</span>?
          </h2>
          <p className="text-[#a1a1aa] text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of competitive gamers who are already winning real money
            on StakeArena. Sign up free, deposit funds, and start dominating.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button variant="primary" size="lg" pulse className="min-w-[220px] font-black text-lg">
                Create Free Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="ghost" size="lg" className="min-w-[180px] text-[#a1a1aa]">
                Learn More
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#6b7280]">
            No credit card required • Free to join • Instant withdrawals
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
