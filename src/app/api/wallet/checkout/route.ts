import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";


export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { amount } = await request.json();
    const parsedAmount = parseFloat(amount);

    if (!parsedAmount || parsedAmount < 1 || parsedAmount > 10000) {
      return NextResponse.json(
        { error: "Amount must be between $1 and $10,000" },
        { status: 400 }
      );
    }

    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "StakeArena Wallet Deposit",
              description: `Add $${parsedAmount.toFixed(2)} to your StakeArena balance`,
              images: [],
            },
            unit_amount: Math.round(parsedAmount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/wallet/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/wallet/cancel`,
      metadata: {
        userId: session.user.id,
        amount: parsedAmount.toString(),
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
