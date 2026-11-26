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
          'Treasury | M&A | Outsourced F&A | Assurance | Taxation',
        ]}
        ctaLabel="Request a Proposal"
        ctaTo="/contact"
      />

      <main id="main-content">
        {/* Core 8 services */}
        <Services />

        {/* Sectors Section */}
        <section
          id="sectors"
          aria-labelledby="sectors-heading"
          className="mx-auto max-w-[1280px] py-8 sm:py-12 md:py-16 lg:py-24"
        >
          <Reveal className="text-center">
            <h2
              id="sectors-heading"
              className="mx-auto max-w-[24ch] text-[clamp(1.75rem,3.6vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
            >
              Our Industry Footprint
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 md:mt-12 md:gap-6">
            {SECTORS.map((sector, idx) => {
              const Icon = SECTOR_ICONS[sector.icon];
              return (
                <Reveal
                  key={sector.id}
                  delay={idx * 0.06}
                  className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <div className="group relative flex h-52 w-full flex-col justify-between overflow-hidden rounded-card bg-ink p-4 text-white transition-transform duration-300 ease-argo hover:-translate-y-1.5 hover:shadow-card sm:h-72 sm:p-5 lg:h-[315px]">
                    {/* Background photography */}
                    <img
                      src={sector.image}
                      alt={sector.imageAlt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[600ms] ease-argo group-hover:scale-[1.06]"
                    />
                    {/* Legibility gradient */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(10,28,22,0.88)] via-[rgba(10,28,22,0.34)] to-[rgba(10,28,22,0.12)]"
                    />
                    <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-ink transition-transform duration-300 ease-argo group-hover:scale-[1.08]">
                      <Icon className="h-[21px] w-[21px]" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="relative z-10 text-[1.1875rem] font-medium leading-[1.3] text-white xl:text-[1.25rem]">
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
          className="rounded-card bg-surface px-4 py-10 sm:px-8 sm:py-12 md:rounded-panel md:px-12 md:py-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal className="text-center">
              <h2
                id="tools-heading"
                className="mx-auto max-w-[24ch] text-[clamp(1.65rem,3vw,2.65rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
              >
                Hands-On Tools
              </h2>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 md:mt-12">
              {HANDS_ON_TOOLS.map((tool, idx) => {
                const isWordmarkOnly = tool.id === 'sap' || tool.id === 'xero';
                return (
                  <Reveal
                    key={tool.id}
                    delay={idx * 0.05}
                    className="w-full last:col-span-2 last:mx-auto last:w-[calc(50%-6px)] sm:w-[220px] sm:last:col-span-1 sm:last:mx-0 sm:last:w-[220px]"
                  >
                    <div
                      className={`flex h-full min-h-[64px] items-center gap-2 overflow-hidden rounded-2xl border border-hairline bg-bg px-3 py-3 transition-all duration-250 ease-argo hover:-translate-y-1 hover:border-accent hover:shadow-card sm:min-h-[72px] sm:gap-3.5 sm:px-5 sm:py-4 ${
                        isWordmarkOnly ? 'justify-center' : ''
                      }`}
                    >
                      <ToolLogoMark id={tool.id} />
                      {isWordmarkOnly ? (
                        <span className="sr-only">{tool.name}</span>
                      ) : (
                        <span className="truncate text-[0.8125rem] font-medium text-ink sm:text-[1rem]">
                          {tool.name}
                        </span>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.15} className="mt-10 text-center sm:mt-12">
              <Link
                to="/contact"
                className="group inline-flex min-h-[48px] max-w-full items-center gap-2 rounded-full bg-accent px-5 text-[0.875rem] font-medium text-on-accent transition-colors duration-200 ease-argo hover:bg-accent-deep active:scale-[0.98] sm:px-7 sm:text-[0.9375rem]"
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
