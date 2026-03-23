import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getDisputeBlock } from "@/lib/disputeBlock";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await getDisputeBlock(session.user.id);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Dispute block check error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
