"use client";

import React from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export const CTASection = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [formState, setFormState] = React.useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong");
        setFormState("error");
        return;
      }

      setFormState("success");
    } catch {
      setErrorMessage("Network error. Please try again.");
      setFormState("error");
    }
  };

  return (
    <section id="waitlist" className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl bg-orange-500 p-6 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Focus on your product.
            <br />
            Not billing infrastructure.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Join the waitlist to get early access to CostAPI. Start shipping
            cloud cost products in days, not months.
          </p>

          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Pre-launch — validating demand before building the platform.
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {formState === "success" ? (
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-lg font-semibold text-white">
                  <CheckCircle2 className="h-6 w-6" />
                  Added to waitlist 🎉
                </div>
                <p className="text-sm text-white/70">
                  Thanks for joining the CostAPI waitlist.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4"
              >
                <div className="flex w-full flex-col gap-3 md:flex-row">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={formState === "loading"}
                    className="py-3 flex-1 rounded-full bg-white/10 px-5 text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-white/50 disabled:opacity-50"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={formState === "loading"}
                    className="py-3 flex-1 rounded-full bg-white/10 px-5 text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-white/50 disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-white/90 disabled:pointer-events-none disabled:opacity-50"
                >
                  {formState === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-xs text-white/50">
                  We&apos;ll only use your email to contact you about CostAPI.
                </p>
                <p className="text-xs text-white/50">
                  Built by engineers who got tired of parsing AWS CUR files.
                </p>
              </form>
            )}
          </div>

          {formState === "error" && (
            <p className="mt-4 text-sm font-medium text-red-200">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
