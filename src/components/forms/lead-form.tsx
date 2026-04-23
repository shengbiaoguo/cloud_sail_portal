"use client";

import { FormEvent, useState } from "react";

const INITIAL_STATE = {
  name: "",
  phone: "",
  email: "",
  company: "",
  message: "",
};

type LeadFormProps = {
  sourcePage: string;
};

export function LeadForm({ sourcePage }: LeadFormProps) {
  const [form, setForm] = useState(INITIAL_STATE);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sourcePage }),
      });
      if (!response.ok) {
        throw new Error("提交失败");
      }
      setForm(INITIAL_STATE);
      setFeedback("提交成功，我们会尽快与您联系。");
    } catch {
      setFeedback("提交失败，请稍后重试。");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-xl border border-[var(--line)] bg-white p-4">
      <input
        value={form.name}
        onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        placeholder="姓名"
        required
        className="rounded-md border border-[var(--line)] px-3 py-2 text-sm outline-none focus:border-[var(--brand)]"
      />
      <input
        value={form.phone}
        onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
        placeholder="手机号"
        required
        className="rounded-md border border-[var(--line)] px-3 py-2 text-sm outline-none focus:border-[var(--brand)]"
      />
      <input
        value={form.email}
        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
        placeholder="邮箱（选填）"
        className="rounded-md border border-[var(--line)] px-3 py-2 text-sm outline-none focus:border-[var(--brand)]"
      />
      <input
        value={form.company}
        onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
        placeholder="公司（选填）"
        className="rounded-md border border-[var(--line)] px-3 py-2 text-sm outline-none focus:border-[var(--brand)]"
      />
      <textarea
        value={form.message}
        onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
        placeholder="需求描述"
        rows={4}
        className="rounded-md border border-[var(--line)] px-3 py-2 text-sm outline-none focus:border-[var(--brand)]"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
      >
        {pending ? "提交中..." : "提交咨询"}
      </button>
      {feedback ? <p className="text-sm text-[var(--muted)]">{feedback}</p> : null}
    </form>
  );
}
