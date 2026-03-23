"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function WithdrawalActions({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleProcess() {
    setLoading(true);
    try {
      await fetch(`/api/admin/withdrawals/${id}/approve`, { method: "POST" });
      setDone(true);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00ff88]">
        <CheckCircle className="w-3.5 h-3.5" />
        Processed
      </span>
    );
  }

  return (
    <Button
      variant="primary"
      size="sm"
      onClick={handleProcess}
      disabled={loading}
      className="text-xs px-3 py-1.5 h-auto whitespace-nowrap"
    >
      {loading
        ? <Loader2 className="w-3 h-3 animate-spin" />
        : <><CheckCircle className="w-3 h-3 mr-1" />Mark as Processed</>
      }
    </Button>
  );
}
