"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type Props = {
  /** API route that receives the submission, e.g. /api/forms or /api/newsletter */
  endpoint: string;
  className?: string;
  children: ReactNode;
};

/**
 * Wraps the site's contact and newsletter forms. Keeps the original markup and styling,
 * posts the fields as JSON to our own API route, and toggles the success / failure
 * messages that live inside the form ([data-response-type]).
 */
export function ManagedForm({ endpoint, className, children }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "failure">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website || data.telephone) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("failure");
    }
  }

  return (
    <form className={className} onSubmit={onSubmit} data-status={status} aria-busy={status === "sending"}>
      {children}
      {/* Honeypot fields: hidden from people, filled in by bots. */}
      <fieldset style={{ display: "none" }} aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        <input type="text" name="telephone" tabIndex={-1} autoComplete="off" />
      </fieldset>
    </form>
  );
}
