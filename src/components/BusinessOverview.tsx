import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_OVERVIEW } from '../data/siteData';
import { Reveal } from './Reveal';

export function BusinessOverview() {
  const { aboutBusiness, problemWeSolve } = BUSINESS_OVERVIEW;

  return (
    <section
      aria-labelledby="business-overview-heading"
      className="mx-auto max-w-[1280px] pt-8 sm:pt-12 md:pt-16 lg:pt-20"
    >
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-8">
        {/* What our business is about */}
        <Reveal className="flex flex-col justify-between rounded-card bg-surface p-6 sm:p-9 lg:col-span-7">
          <div>
            <h2
              id="business-overview-heading"
              className="text-[clamp(1.6rem,3vw,2.5rem)] font-normal leading-[1.15] tracking-[-0.015em] text-ink"
            >
              {aboutBusiness.heading}
            </h2>
            <div className="mt-4 space-y-3.5 text-left text-[0.9375rem] leading-[1.65] text-ink-soft sm:mt-5 sm:text-justify sm:text-base">
              {aboutBusiness.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-2 sm:mt-7">
            <Link
              to="/services"
              className="group inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-full bg-accent px-5 text-[0.8125rem] font-medium text-on-accent transition-colors duration-200 ease-argo hover:bg-accent-deep sm:px-6 sm:text-[0.875rem]"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 ease-argo group-hover:rotate-45"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>

        {/* What problem we solve */}
        <Reveal
          delay={0.12}
          className="flex flex-col justify-between rounded-card border border-hairline bg-bg p-6 sm:p-9 lg:col-span-5"
        >
          <div>
            <h2 className="text-[clamp(1.45rem,2.4vw,2rem)] font-normal leading-[1.18] tracking-[-0.015em] text-ink">
              {problemWeSolve.heading}
            </h2>
            <div className="mt-4 space-y-3.5 text-left text-[0.9375rem] leading-[1.65] text-ink-soft sm:mt-5 sm:text-justify sm:text-base">
              {problemWeSolve.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-2 sm:mt-7">
            <Link
              to="/contact"
              className="group inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-full bg-accent px-5 text-[0.8125rem] font-medium text-on-accent transition-colors duration-200 ease-argo hover:bg-accent-deep sm:px-6 sm:text-[0.875rem]"
            >
              <span>Discuss your finance operations</span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 ease-argo group-hover:rotate-45"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
