import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

// Required: read raw body for Stripe signature verification
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const userId = session.metadata?.userId;
    const amount = parseFloat(session.metadata?.amount || "0");

    if (!userId || !amount) {
      console.error("Webhook: missing userId or amount in metadata", session.metadata);
      return NextResponse.json({ error: "Missing metadata" }, { status: 400 });
    }

    // Idempotency: skip if we already processed this session
    const existing = await prisma.transaction.findUnique({
      where: { stripeSessionId: session.id },
    });
    if (existing) {
      return NextResponse.json({ received: true });
    }

    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: userId },
        data: { balance: { increment: amount } },
      });
      await tx.transaction.create({
        data: {
          userId,
          type: "DEPOSIT",
          amount,
          status: "COMPLETED",
          stripeSessionId: session.id,
          description: `Stripe deposit — ${session.payment_intent ?? session.id}`,
        },
      });
    });

    console.log(`Credited $${amount} to user ${userId}`);
  }

  return NextResponse.json({ received: true });
}
