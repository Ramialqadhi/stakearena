"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CheckCircle, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function WalletSuccessPage() {
  const { update } = useSession();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    // Poll until the JWT balance reflects the new deposit (webhook may take a moment)
    let attempts = 0;
    async function refresh() {
      await update({});
      attempts++;
      if (attempts < 8) {
        setTimeout(refresh, 1500);
      }
    }
    // Give the webhook a moment to land before the first refresh
    setTimeout(refresh, 1000);
  }, [update]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 hero-bg">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative w-full max-w-md text-center">
        <div className="glass rounded-2xl p-10 border border-[rgba(0,255,136,0.2)]">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[rgba(0,255,136,0.1)] border-2 border-[#00ff88] flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-[#00ff88]" />
            </div>
          </div>

          <h1 className="text-3xl font-black text-[#f0f0f5] mb-3">
            Deposit Successful!
          </h1>
          <p className="text-[#6b7280] mb-8 leading-relaxed">
            Your payment was processed. Your wallet balance is being updated now.
          </p>

          <div className="flex flex-col gap-3">
            <Link href="/wallet">
              <Button variant="primary" size="md" className="w-full font-bold">
                <Wallet className="w-4 h-4 mr-2" />
                View Wallet
              </Button>
            </Link>
            <Link href="/challenges/new">
              <Button variant="outline" size="md" className="w-full">
                Create a Challenge
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
