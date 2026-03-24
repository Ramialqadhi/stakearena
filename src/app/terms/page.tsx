import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service – StakeArena",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-black text-[#00ff88] uppercase tracking-wide mb-4 flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-[#00ff88] inline-block" />
        {title}
      </h2>
      <div className="space-y-3 text-[#a1a1aa] text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <p className="pl-4 border-l border-[#1e1e2e] text-[#a1a1aa]">{children}</p>
  );
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-[#00ff88] font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-black text-[#f0f0f5] mb-4">Terms of Service</h1>
          <p className="text-[#6b7280] text-sm">Last updated: March 2025</p>
          <div className="mt-6 p-4 rounded-xl border border-[rgba(0,255,136,0.2)] bg-[rgba(0,255,136,0.04)]">
            <p className="text-sm text-[#a1a1aa]">
              By creating an account or using StakeArena, you agree to these Terms of Service in full.
              If you do not agree, you must not use the platform.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-[#00ff88] via-[#1e1e2e] to-transparent mb-10" />

        <Section title="1. Platform Description">
          <Rule>
            StakeArena is a skill-based 1v1 wagering platform that allows registered users to compete
            against each other in online games for real money prizes. StakeArena does not host or
            facilitate games directly — it operates as a neutral escrow and challenge coordination layer.
          </Rule>
          <Rule>
            All matches are player vs. player. There is no house, no casino element, and no randomness.
            Outcomes are determined solely by player skill.
          </Rule>
        </Section>

        <Section title="2. Eligibility — 18+ Only">
          <Rule>
            <strong className="text-[#f0f0f5]">You must be at least 18 years of age to create an account or use StakeArena.</strong>{" "}
            By registering, you confirm that you meet this age requirement.
          </Rule>
          <Rule>
            You are responsible for ensuring that your participation in skill-based wagering is legal
            in your jurisdiction. StakeArena does not warrant that use of the platform is lawful in
            every location. Access from jurisdictions where such activity is prohibited is not permitted.
          </Rule>
        </Section>

        <Section title="3. Account Responsibility">
          <Rule>
            You are responsible for keeping your account credentials secure. You may not share, sell,
            or transfer your account to any other person.
          </Rule>
          <Rule>
            You agree to provide accurate and truthful information at registration and to keep it
            up to date.
          </Rule>
        </Section>

        <Section title="4. Gameplay Recording & Disputes">
          <Rule>
            <strong className="text-[#f0f0f5]">You are responsible for recording your gameplay</strong> for all
            StakeArena matches. In the event of a dispute, unverified results may be ruled against
            the player who cannot provide evidence.
          </Rule>
          <Rule>
            Disputes are reviewed by StakeArena administrators. The administrator&apos;s decision is
            final and binding. There is no formal appeals process.
          </Rule>
          <Rule>
            Evidence submitted must be original, unedited, and clearly show the match outcome.
            Submitting falsified or manipulated evidence is grounds for immediate account termination
            and forfeiture of funds.
          </Rule>
        </Section>

        <Section title="5. Fees & Rake">
          <Rule>
            StakeArena charges a <strong className="text-[#f0f0f5]">10% platform fee (rake)</strong> on all
            match winnings. The winner of a match receives 90% of the total pot (both players&apos; stakes
            combined). Example: a $25 vs $25 match pays the winner $45.
          </Rule>
          <Rule>
            The rake is deducted automatically at the time of payout. No additional fees apply to
            in-platform deposits.
          </Rule>
        </Section>

        <Section title="6. Withdrawals">
          <Rule>
            Withdrawals are processed within <strong className="text-[#f0f0f5]">24 hours</strong> of the request being
            submitted during business days.
          </Rule>
          <Rule>
            A processing fee of <strong className="text-[#f0f0f5]">$1.99</strong> applies to all withdrawal requests.
          </Rule>
          <Rule>
            The <strong className="text-[#f0f0f5]">minimum withdrawal amount is $25</strong>. Requests below this
            threshold will not be processed.
          </Rule>
          <Rule>
            StakeArena reserves the right to delay or withhold withdrawals pending identity verification
            or fraud investigation.
          </Rule>
        </Section>

        <Section title="7. Refund Policy">
          <Rule>
            <strong className="text-[#f0f0f5]">No refunds are issued on completed matches</strong>, regardless of outcome.
            Once a match has been played and a result submitted (or adjudicated by an admin), the
            decision is final.
          </Rule>
          <Rule>
            Stakes for challenges that are cancelled before any play begins (i.e., PENDING challenges
            cancelled by the creator) are refunded in full to the creator&apos;s wallet balance.
          </Rule>
          <Rule>
            Expired matchmaking queue entries are refunded automatically to the user&apos;s wallet balance.
          </Rule>
        </Section>

        <Section title="8. Fair Play & Cheating">
          <Rule>
            You agree to compete honestly and report match results accurately. Any form of cheating,
            exploitation of game bugs, use of third-party software, or collusion with an opponent to
            manipulate outcomes is strictly prohibited.
          </Rule>
          <Rule>
            <strong className="text-[#f0f0f5]">StakeArena reserves the right to ban any account</strong> found
            to be engaging in cheating, fraud, result manipulation, or any other violation of fair play.
            Banned accounts may forfeit all funds held on the platform.
          </Rule>
          <Rule>
            Chargebacks issued through payment processors will result in immediate account suspension
            and may result in legal action to recover funds.
          </Rule>
        </Section>

        <Section title="9. Real Money Risk">
          <Rule>
            <strong className="text-[#f0f0f5]">Real money is involved.</strong> You acknowledge that you may lose
            the funds you stake in any given match. StakeArena does not guarantee winnings.
          </Rule>
          <Rule>
            You participate in all wagering activities entirely at your own risk. StakeArena is not
            liable for any financial losses incurred through the platform.
          </Rule>
          <Rule>
            Please wager responsibly. If you feel you may have a problem with gambling, seek help at
            a responsible gaming resource in your region before using this platform.
          </Rule>
        </Section>

        <Section title="10. Modifications & Termination">
          <Rule>
            StakeArena reserves the right to modify these Terms at any time. Continued use of the
            platform following notification of changes constitutes acceptance of the updated Terms.
          </Rule>
          <Rule>
            StakeArena may suspend or terminate any account at its sole discretion, including for
            inactivity, violation of these Terms, or any reason deemed necessary to protect the
            integrity of the platform.
          </Rule>
        </Section>

        <div className="mt-10 pt-8 border-t border-[#1e1e2e] text-center">
          <p className="text-xs text-[#6b7280]">
            Questions about these terms?{" "}
            <Link href="/privacy" className="text-[#00ff88] hover:underline">Privacy Policy</Link>
            {" "}·{" "}
            <a href="mailto:support@stakearena.gg" className="text-[#a1a1aa] hover:text-[#f0f0f5] transition-colors">
              support@stakearena.gg
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
