import {
  ArrowUpRight,
  Building2,
  Factory,
  HeartPulse,
  Plane,
  ShoppingBag,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { Services } from '../components/Services';
import { ToolLogoMark } from '../components/ToolLogoMark';
import {
  HANDS_ON_TOOLS,
  SECTORS,
  type SectorIconName,
} from '../data/siteData';

const SECTOR_ICONS: Record<SectorIconName, typeof Factory> = {
  Factory,
  Building2,
  ShoppingBag,
  HeartPulse,
  Zap,
  TrendingUp,
  Plane,
};

export function ServicesPage() {
  return (
    <>
      <PageHero
        line1="CFO Office Services"
        description={[
          'Integrated solutions across CFO Office functions',
          'Accounting | Financial Reporting | Assurance | Taxation | Regulatory Compliance | Financial Planning | MIS | Business Advisory | Treasury',
        ]}
        ctaLabel="Request a Proposal"
        ctaTo="/contact"
      />

      <main id="main-content">
        {/* Core 7 services */}
        <Services />

        {/* Sectors Section */}
        <section
          id="sectors"
          aria-labelledby="sectors-heading"
          className="mx-auto max-w-[1280px] py-12 md:py-16 lg:py-24"
        >
          <Reveal className="text-center">
            <h2
              id="sectors-heading"
              className="mx-auto max-w-[24ch] text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
            >
              Our Industry Footprint
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-4 md:mt-12 md:gap-6">
            {SECTORS.map((sector, idx) => {
              const Icon = SECTOR_ICONS[sector.icon];
              return (
                <Reveal
                  key={sector.id}
                  delay={idx * 0.06}
                  className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <div className="group relative flex min-h-[200px] h-full flex-col justify-between overflow-hidden rounded-card bg-ink p-6 text-white transition-all duration-300 ease-argo hover:-translate-y-1.5 hover:shadow-card">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(183,229,44,0.16),transparent_55%)]"
                    />
                    <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-ink transition-transform duration-300 ease-argo group-hover:scale-[1.08]">
                      <Icon className="h-[21px] w-[21px]" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="relative z-10 mt-8 text-[1.1875rem] font-medium leading-[1.3] text-white xl:text-[1.25rem]">
                      {sector.title}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Hands-on Tools Section */}
        <section
          id="tools"
          aria-labelledby="tools-heading"
          className="rounded-card bg-surface px-4 py-12 sm:px-8 md:rounded-panel md:px-12 md:py-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal className="text-center">
              <h2
                id="tools-heading"
                className="mx-auto max-w-[24ch] text-[clamp(1.75rem,3vw,2.65rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
              >
                Hands-On Tools
              </h2>
            </Reveal>

            <div className="mt-10 flex flex-wrap justify-center gap-4 md:mt-12">
              {HANDS_ON_TOOLS.map((tool, idx) => (
                <Reveal
                  key={tool.id}
                  delay={idx * 0.05}
                  className="w-[calc(50%-8px)] sm:w-[210px]"
                >
                  <div className="flex h-full items-center gap-3.5 rounded-2xl border border-hairline bg-bg px-5 py-4 transition-all duration-250 ease-argo hover:-translate-y-1 hover:border-accent hover:shadow-card">
                    <ToolLogoMark id={tool.id} />
                    <span className="text-[1rem] font-medium text-ink">
                      {tool.name}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-12 text-center">
              <Link
                to="/contact"
                className="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 text-[0.9375rem] font-medium text-on-accent transition-colors duration-200 ease-argo hover:bg-accent-deep active:scale-[0.98]"
              >
                <span>Enquire About CFO Office Support</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 ease-argo group-hover:rotate-45"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
