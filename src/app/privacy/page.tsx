import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – StakeArena",
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

function DataRow({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex gap-4 py-3 border-b border-[#1a1a28] last:border-0">
      <span className="min-w-[160px] text-[#f0f0f5] font-semibold text-sm">{label}</span>
      <span className="text-[#6b7280] text-sm">{detail}</span>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-[#00ff88] font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-black text-[#f0f0f5] mb-4">Privacy Policy</h1>
          <p className="text-[#6b7280] text-sm">Last updated: March 2025</p>
          <div className="mt-6 p-4 rounded-xl border border-[rgba(0,255,136,0.2)] bg-[rgba(0,255,136,0.04)]">
            <p className="text-sm text-[#a1a1aa]">
              StakeArena is committed to protecting your personal data. This Privacy Policy explains
              what we collect, how we use it, and how we protect it.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-[#00ff88] via-[#1e1e2e] to-transparent mb-10" />

        <Section title="1. Data We Collect">
          <Rule>
            When you create an account or use StakeArena, we collect the following categories of data:
          </Rule>
          <div className="mt-4 rounded-xl border border-[#1e1e2e] overflow-hidden bg-[#0d0d14]">
            <div className="px-4 py-2 bg-[#111120] border-b border-[#1e1e2e]">
              <span className="text-xs text-[#6b7280] uppercase tracking-widest font-semibold">Data collected</span>
            </div>
            <div className="px-4">
              <DataRow label="Email address" detail="Provided at registration. Used for account authentication and platform communications." />
              <DataRow label="Username" detail="Your chosen display name, shown publicly on the platform and leaderboards." />
              <DataRow label="Password" detail="Stored as a one-way cryptographic hash (bcrypt). We never store your plaintext password." />
              <DataRow label="Game credentials" detail="In-game usernames or tags you optionally provide for supported games (e.g. Clash Royale tag). Stored encrypted at rest." />
              <DataRow label="Transaction history" detail="All deposits, withdrawals, stakes, and payouts associated with your account." />
              <DataRow label="Match history" detail="Challenge records including game, stake amount, result, and timestamps." />
              <DataRow label="IP address" detail="Logged at login for fraud prevention and security purposes." />
            </div>
          </div>
        </Section>

        <Section title="2. How We Use Your Data">
          <Rule>
            <strong className="text-[#f0f0f5]">Platform operation:</strong> Your account data is used to authenticate you,
            display your profile, and allow you to create and join challenges.
          </Rule>
          <Rule>
            <strong className="text-[#f0f0f5]">Payouts:</strong> Transaction history and linked payment methods are used to
            process deposits and withdrawals accurately and securely.
          </Rule>
          <Rule>
            <strong className="text-[#f0f0f5]">Dispute resolution:</strong> Match history, submitted evidence, and game credentials
            may be reviewed by StakeArena administrators to adjudicate disputed challenge outcomes.
          </Rule>
          <Rule>
            <strong className="text-[#f0f0f5]">Fraud & security:</strong> We analyse account activity and login patterns
            to detect and prevent fraudulent behaviour, cheating, and unauthorised access.
          </Rule>
          <Rule>
            <strong className="text-[#f0f0f5]">Leaderboards & platform stats:</strong> Aggregated, non-identifiable match
            statistics may be displayed publicly (e.g. total matches played, total prize pool).
            Individual usernames and win/loss records are displayed on leaderboards as part of the
            competitive platform experience.
          </Rule>
        </Section>

        <Section title="3. We Never Sell Your Data">
          <Rule>
            <strong className="text-[#f0f0f5]">StakeArena does not sell, rent, or trade your personal data to any third party</strong>,
            ever. Your data is not used for advertising profiling or shared with data brokers.
          </Rule>
          <Rule>
            We will only disclose personal data to third parties in the following limited circumstances:
            (1) as required by law or valid legal process; (2) to prevent imminent harm or fraud;
            (3) to our payment processor (Stripe) as necessary to facilitate transactions.
          </Rule>
        </Section>

        <Section title="4. Payment Processing">
          <Rule>
            All payment processing on StakeArena is handled by{" "}
            <strong className="text-[#f0f0f5]">Stripe</strong>, a PCI DSS Level 1 certified payment processor.
            StakeArena never stores your card details, bank account numbers, or other sensitive
            payment credentials on our servers.
          </Rule>
          <Rule>
            When you make a deposit or withdrawal, your payment information is transmitted directly
            to Stripe&apos;s secure servers via encrypted connections. Stripe&apos;s own privacy policy governs
            how they handle your payment data.
          </Rule>
          <div className="mt-3 flex items-center gap-3 p-3 rounded-xl border border-[#1e1e2e] bg-[#0d0d14]">
            <div className="w-8 h-8 rounded-lg bg-[rgba(99,91,255,0.15)] border border-[rgba(99,91,255,0.3)] flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-black text-[#6b5fff]">S</span>
            </div>
            <p className="text-xs text-[#6b7280]">
              Stripe is trusted by millions of businesses worldwide for secure payment processing.
              Learn more at{" "}
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f0f0f5] transition-colors">
                stripe.com/privacy
              </a>.
            </p>
          </div>
        </Section>

        <Section title="5. Data Retention">
          <Rule>
            Account and transaction data is retained for the duration of your account and for a
            minimum of 5 years after account closure, as required for financial record-keeping and
            potential dispute resolution purposes.
          </Rule>
          <Rule>
            You may request deletion of your account by contacting support. Note that transaction
            records may be retained for legal compliance purposes even after account deletion.
          </Rule>
        </Section>

        <Section title="6. Cookies & Analytics">
          <Rule>
            StakeArena uses session cookies strictly for authentication (keeping you logged in).
            We do not currently use third-party tracking or analytics cookies.
          </Rule>
        </Section>

        <Section title="7. Your Rights">
          <Rule>
            You have the right to access, correct, or request deletion of your personal data.
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:privacy@stakearena.gg" className="text-[#00ff88] hover:underline">
              privacy@stakearena.gg
            </a>.
          </Rule>
          <Rule>
            If you are in the EU/EEA, you have additional rights under the GDPR including the right
            to data portability and the right to lodge a complaint with your local supervisory authority.
          </Rule>
        </Section>

        <Section title="8. Changes to This Policy">
          <Rule>
            We may update this Privacy Policy from time to time. We will notify registered users of
            material changes via email or an in-platform notice. Continued use of StakeArena after
            changes take effect constitutes acceptance.
          </Rule>
        </Section>

        <div className="mt-10 pt-8 border-t border-[#1e1e2e] text-center">
          <p className="text-xs text-[#6b7280]">
            Questions about privacy?{" "}
            <a href="mailto:privacy@stakearena.gg" className="text-[#00ff88] hover:underline">
              privacy@stakearena.gg
            </a>
            {" "}·{" "}
            <Link href="/terms" className="text-[#a1a1aa] hover:text-[#f0f0f5] transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
