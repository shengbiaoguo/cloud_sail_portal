import { NextRequest, NextResponse } from "next/server";
import { submitLead } from "@/lib/api/leads";
import { LeadPayload } from "@/types/content";

function isValidLeadPayload(payload: Partial<LeadPayload>): payload is LeadPayload {
  return Boolean(payload.name && payload.phone && payload.sourcePage);
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as Partial<LeadPayload>;
    if (!isValidLeadPayload(payload)) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    const result = await submitLead(payload);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
