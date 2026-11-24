import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BentoStrip } from '../components/BentoStrip';
import { Hero } from '../components/Hero';
import { Reveal } from '../components/Reveal';
import { TrustStats } from '../components/TrustStats';

export function HomePage() {
  return (
    <>
      <Hero />

      <main id="main-content">
        <BentoStrip />
        <TrustStats />

        {/* Closing CTA routing to Contact Us */}
        <section
          aria-label="Connect with ArGo"
          className="mt-4 rounded-card bg-ink p-8 text-white sm:p-12 md:mt-6 md:rounded-panel lg:p-16"
        >
          <Reveal className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[640px]">
              <h2 className="text-[clamp(1.85rem,3.4vw,3rem)] font-normal leading-[1.12] tracking-[-0.015em] text-[#F7F5F0]">
                Ready to Strengthen Your CFO Office?
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 text-[0.9375rem] font-medium text-on-accent transition-colors duration-200 ease-argo hover:bg-accent-deep active:scale-[0.98]"
              >
                <span>Partner with ArGo</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 ease-argo group-hover:rotate-45"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
