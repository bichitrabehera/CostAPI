import Link from "next/link";
import {} from "lucide-react";
import { LinkedIn, XDark } from "developer-icons";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              CostAPI
            </Link>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Unified multi-cloud cost intelligence API. Access AWS, Azure, and
              GCP pricing data through a single developer-friendly API.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-12">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Contact 
              </h3>

              <div className="space-x-4 flex justify-center items-center text-sm">
                <a
                  href="https://x.com/bichitradotdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex bg-white border border-orange-200 p-2 rounded hover:translate-y-0.5 items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <XDark className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com/in/bichitrabehera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex bg-white border border-orange-200  p-2 rounded hover:translate-y-0.5 items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <LinkedIn className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CostAPI. All rights reserved.</p>

          <p>Built for cloud engineers and FinOps teams.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
