import Link from "next/link";
import { XCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function WalletCancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 hero-bg">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative w-full max-w-md text-center">
        <div className="glass rounded-2xl p-10 border border-[#1e1e2e]">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[rgba(239,68,68,0.1)] border-2 border-[#ef4444] flex items-center justify-center">
              <XCircle className="w-10 h-10 text-[#ef4444]" />
            </div>
          </div>

          <h1 className="text-3xl font-black text-[#f0f0f5] mb-3">
            Payment Cancelled
          </h1>
          <p className="text-[#6b7280] mb-8 leading-relaxed">
            Your payment was cancelled and nothing was charged. Your balance remains unchanged.
          </p>

          <Link href="/wallet">
            <Button variant="outline" size="md" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Wallet
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
