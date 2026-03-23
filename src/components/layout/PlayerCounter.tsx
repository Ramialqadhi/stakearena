import { prisma } from "@/lib/prisma";
import { Users } from "lucide-react";

export async function PlayerCounter() {
  const count = await prisma.user.count();

  return (
    <div className="fixed bottom-4 right-4 z-40 pointer-events-none">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(10,10,15,0.85)] border border-[#1e1e2e] backdrop-blur-sm shadow-lg">
        <Users className="w-3 h-3 text-[#00ff88] flex-shrink-0" />
        <span className="text-[11px] font-semibold text-[#a1a1aa]">
          <span className="text-[#f0f0f5]">{count.toLocaleString()}</span>
          {" "}players on StakeArena
        </span>
      </div>
    </div>
  );
}
