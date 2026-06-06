import { Clock3, Zap, Check } from "lucide-react";

import { GoogleCloud, AWS, Azure } from "developer-icons";

const CloudProviders = () => (
  <div className="mt-6 flex items-center gap-3">
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF9900]/10">
      <AWS className="h-4 w-4 text-[#FF9900]" />
    </div>

    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0078D4]/10">
      <Azure className="h-4 w-4 text-[#0078D4]" />
    </div>

    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4285F4]/10">
      <GoogleCloud className="h-4 w-4 text-[#4285F4]" />
    </div>
  </div>
);

export function Problem() {
  return (
    <section id="problem" className="border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ship Cloud Cost Features in Days, Not Months
          </h2>

          <p className="mt-4 text-muted-foreground">
            Most teams spend months stitching together AWS, Azure, and GCP
            billing exports before they can ship a single customer-facing
            feature.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Traditional */}
          <div className="paper-card rounded-xl p-8">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <Clock3 className="h-5 w-5" />
            </div>

            <div className="text-sm font-medium text-muted-foreground">
              Traditional Approach
            </div>

            <div className="mt-2 text-4xl font-bold tracking-tight text-foreground">
              3–6 mo
            </div>

            <CloudProviders />

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Build parsers, normalize schemas, manage tags, allocate spend,
              amortize commitments, and maintain infrastructure across every
              cloud provider.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Parsing & ingestion",
                "Schema normalization",
                "Cost allocation logic",
                "RI & Savings Plan handling",
                "Query infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CostAPI */}
          <div className="paper-card rounded-xl border-primary/15 p-8">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Zap className="h-5 w-5" />
            </div>

            <div className="text-sm font-medium text-primary">With CostAPI</div>

            <div className="mt-2 text-4xl font-bold tracking-tight text-foreground">
              1 day
            </div>

            <CloudProviders />

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Connect your cloud accounts and immediately access normalized
              billing data through a single API.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Unified schema",
                "Built-in allocation",
                "RI & Savings Plan amortization",
                "Developer-first API",
                "Production ready",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
