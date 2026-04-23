import { apiFetch } from "@/lib/api/client";
import { LeadPayload } from "@/types/content";

export async function submitLead(payload: LeadPayload) {
  return apiFetch<{ success: boolean; id?: number }>("/leads", {
    method: "POST",
    body: payload,
  });
}
