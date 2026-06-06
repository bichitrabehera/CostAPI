import React from "react";
import {
  LayoutGrid,
  Tag,
  BadgePercent,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Unified Schema",
    description:
      "One API regardless of cloud provider. AWS, Azure, and GCP billing data normalized into a consistent format you can query immediately.",
  },
  {
    icon: Tag,
    title: "Cost Allocation",
    description:
      "Allocate spend by team, application, environment, or cost center. Built-in support for custom tagging strategies across all providers.",
  },
  {
    icon: BadgePercent,
    title: "RI & Savings Plan Amortization",
    description:
      "Correct cost calculations for reserved instances and savings plans without implementing provider-specific amortization logic.",
  },
  {
    icon: Code2,
    title: "Developer First",
    description:
      "REST API with OpenAPI specification, typed SDKs, and clear documentation. Integrate cloud cost data into any stack in minutes.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Everything You Need to Ship Cloud Cost Products
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stop maintaining fragile ETL pipelines. Focus on building products
            that help teams understand and optimize their cloud spend.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="paper-card rounded-xl p-6 transition-all hover:bg-muted/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="mb-2 font-semibold text-foreground"
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
