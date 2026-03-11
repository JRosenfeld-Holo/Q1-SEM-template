import { NextRequest, NextResponse } from "next/server";

const PORTAL_ID = "49396559";
const FORM_ID = "5eaff5cf-059f-4b6f-8eaa-385e4d6abc29";
const SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Forward the real user IP and hutk cookie so HubSpot can properly
    // identify the visitor and avoid spam-flagging legitimate submissions
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      undefined;
    const hutk = req.cookies.get("hubspotutk")?.value ?? undefined;

    const enrichedBody = {
      ...body,
      context: {
        ...body.context,
        // Use the production domain so HubSpot's allowed-domain check passes.
        // Replace with the real page URL once the custom domain is set up.
        pageUri: "https://www.hologram.io/contact-sales/",
        ...(ip && { ipAddress: ip }),
        ...(hutk && { hutk }),
      },
    };

    const res = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrichedBody),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[contact proxy] error", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
