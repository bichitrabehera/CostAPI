import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body?.name?.trim();
    const email = body?.email?.trim();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Log every submission
    console.log("================================");
    console.log("NEW WAITLIST SUBMISSION");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Time:", new Date().toISOString());
    console.log("================================");

    const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;

    // If no webhook configured, just return success
    if (!webhookUrl) {
      return NextResponse.json({
        success: true,
        message: "Saved in logs",
      });
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });

    const responseText = await webhookResponse.text().catch(() => "");

    console.log("Webhook Status:", webhookResponse.status);
    console.log("Webhook Response:", responseText);

    if (!webhookResponse.ok) {
      return NextResponse.json(
        {
          error: "Webhook failed",
          details: responseText,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
