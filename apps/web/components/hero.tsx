import React from "react";
import { ArrowRight, Terminal } from "lucide-react";

const sampleJson = `{
  "metadata": {
    "report_id": "costapi_20260601",
    "generated_at": "2026-06-01T12:00:00Z"
  },
  "line_items": [
    {
      "provider": "aws",
      "service": "Amazon EC2",
      "resource_id": "i-0abcd1234efgh5678",
      "region": "us-east-1",
      "tags": {
        "team": "platform-eng",
        "environment": "production",
        "cost_center": "infra-012"
      },
      "cost_amount": 421.92,
      "currency": "USD",
      "usage_quantity": 744.0,
      "usage_unit": "Hours",
      "pricing_term": "OnDemand"
    }
  ],
  "total_cost": 421.92
}`;

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="planner-bg" />

      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
            <Terminal className="h-3.5 w-3.5 text-primary" />
            <span className="micro-label">Multi-Cloud Cost Data API</span>
          </div>

          <h1 className="animate-fade-in-up text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
            Stop Building
            <br />
            <span className="text-primary">Cloud Billing ETL</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-base leading-7 text-muted-foreground md:text-lg md:leading-8"
            style={{ animationDelay: "0.1s" }}
          >
            Normalize AWS, Azure, and GCP billing data into a single schema.
            Ship FinOps dashboards, chargeback systems, and cloud cost analytics
            in days not months.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#waitlist"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#problem"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-7 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-muted focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            >
              Learn More
            </a>
          </div>

          <div
            className="mx-auto mt-16 max-w-2xl animate-fade-in-up overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-xl shadow-black/5 backdrop-blur-sm"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/50 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-muted-foreground">
                  Live API Response
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                <span>200 OK</span>
                <span>127ms</span>

                <div className="rounded-md bg-muted px-2 py-1">
                  <span style={{ fontFamily: "var(--font-code)" }}>
                    GET /v1/costs
                  </span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="bg-[#0A0A0A] p-5">
              {/* Provider Badge */}
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-md bg-[#FF9900]/10 px-2 py-1">
                  <span className="text-[11px] font-medium text-[#FF9900]">
                    AWS
                  </span>
                </div>

                <div className="rounded-md bg-primary/10 px-2 py-1">
                  <span className="text-[11px] font-medium text-primary">
                    Unified Cost Schema
                  </span>
                </div>
              </div>

              <pre
                className="overflow-x-auto text-left text-sm text-orange-500 leading-7"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {sampleJson}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
