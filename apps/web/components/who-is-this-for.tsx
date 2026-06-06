import React from "react";
import {
  BarChart3,
  LayoutDashboard,
  Building2,
  ArrowLeftRight,
  Users,
} from "lucide-react";

const audience = [
  {
    icon: BarChart3,
    title: "FinOps Platforms",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Developer Portals",
  },
  {
    icon: Building2,
    title: "MSP Billing Systems",
  },
  {
    icon: ArrowLeftRight,
    title: "Chargeback & Showback Tools",
  },
  {
    icon: Users,
    title: "Teams Building Cloud Cost Analytics",
  },
];

export const WhoIsThisFor = () => {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Who Is This For?
          </h2>
          <p className="mt-4 text-muted-foreground">
            CostAPI saves weeks of billing integration work for teams building
            cloud cost products.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
          {audience.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="paper-card flex items-center gap-4 rounded-xl p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
