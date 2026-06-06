import React from "react";
import {
  BarChart3,
  LayoutDashboard,
  Building2,
  Receipt,
} from "lucide-react";

const useCases = [
  {
    icon: BarChart3,
    title: "FinOps Platforms",
    description:
      "Build cost dashboards and analytics tools with normalized data from every major cloud provider.",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Developer Portals",
    description:
      "Surface real-time cost data in your IDP so developers can see the impact of their infrastructure choices.",
  },
  {
    icon: Building2,
    title: "MSP Billing Platforms",
    description:
      "Aggregate and bill across customer accounts with consistent cost data and markup logic.",
  },
  {
    icon: Receipt,
    title: "Chargeback & Showback Systems",
    description:
      "Allocate cloud costs to business units with accurate, auditable data your finance team can trust.",
  },
];

export const UseCases = () => {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Built for Real-World FinOps Products
          </h2>
          <p className="mt-4 text-muted-foreground">
            CostAPI handles the billing complexity so you can focus on delivering
            value to your users.
          </p>
        </div>

        <div className="mt-16 grid max-w-3xl mx-auto gap-6 sm:grid-cols-2 ">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="paper-card rounded-xl p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="mb-2 font-semibold text-foreground"
                >
                  {useCase.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
