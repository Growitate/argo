import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Navbar } from './Navbar';
import { Pill } from './Pill';
import { ARGO_EASE } from './Reveal';

interface PageHeroProps {
  pill?: string;
  line1: string;
  line2?: string;
  description: string | string[];
  ctaLabel?: string;
  ctaTo?: string;
}

export function PageHero({
  pill,
  line1,
  line2,
  description,
  ctaLabel,
  ctaTo,
}: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const descriptionLines = Array.isArray(description) ? description : [description];

  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative overflow-hidden rounded-[20px] bg-ink text-white md:rounded-[28px]"
    >
      <Navbar />

      {/* Subtle architectural gradient wash inside dark hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(183,229,44,0.14),transparent_52%)]"
      />

      <div className="relative z-10 px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 md:px-12 md:pb-16 md:pt-36 lg:px-16 lg:pb-20">
        <div className={Array.isArray(description) ? 'max-w-[960px]' : 'max-w-[820px]'}>
          {pill && <Pill variant="on-dark">{pill}</Pill>}

          <h1
            id="page-hero-heading"
            className={`${pill ? 'mt-5' : ''} text-[clamp(1.85rem,4.6vw,4rem)] font-light leading-[1.12] tracking-[-0.02em] text-[#F7F5F0]`}
          >
            <span className="block overflow-hidden pb-[0.22em] -mb-[0.22em]">
              <motion.span
                initial={{ y: prefersReducedMotion ? 0 : '100%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.55,
                  ease: ARGO_EASE,
                }}
                className="inline-flex flex-wrap items-center gap-4"
              >
                <span>{line1}</span>
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: prefersReducedMotion ? 1 : 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.2 : 0.7,
                    delay: prefersReducedMotion ? 0 : 0.3,
                    ease: ARGO_EASE,
                  }}
                  className="hidden h-px w-[72px] origin-left bg-accent sm:inline-block md:w-[110px]"
                />
              </motion.span>
            </span>

            {line2 && (
              <span className="block overflow-hidden pb-[0.22em] -mb-[0.22em]">
                <motion.span
                  initial={{ y: prefersReducedMotion ? 0 : '100%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.2 : 0.55,
                    delay: prefersReducedMotion ? 0 : 0.08,
                    ease: ARGO_EASE,
                  }}
                  className="block"
                >
                  {line2}
                </motion.span>
              </span>
            )}
          </h1>

          <div className="mt-5 space-y-2">
            {descriptionLines.map((line, idx) => (
              <p
                key={idx}
                className={`${
                  Array.isArray(description) ? 'max-w-none' : 'max-w-[56ch]'
                } text-left text-[0.9375rem] leading-[1.65] text-white/80 sm:text-justify sm:text-[1.0625rem]`}
              >
                {line}
              </p>
            ))}
          </div>

          {ctaLabel && ctaTo && (
            <div className="mt-6 flex items-center sm:mt-7">
              {ctaTo.startsWith('#') ? (
                <a
                  href={ctaTo}
                  className="group inline-flex max-w-full items-center gap-2 active:scale-[0.98]"
                >
                  <span className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-[0.875rem] font-medium text-on-accent transition-colors duration-200 ease-argo group-hover:bg-accent-deep sm:h-[48px] sm:px-6 sm:text-[0.9375rem]">
                    {ctaLabel}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent transition-colors duration-200 ease-argo group-hover:bg-accent-deep sm:h-[48px] sm:w-[48px]"
                  >
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 ease-argo group-hover:rotate-45"
                      strokeWidth={1.75}
                    />
                  </span>
                </a>
              ) : (
                <Link
                  to={ctaTo}
                  className="group inline-flex max-w-full items-center gap-2 active:scale-[0.98]"
                >
                  <span className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-[0.875rem] font-medium text-on-accent transition-colors duration-200 ease-argo group-hover:bg-accent-deep sm:h-[48px] sm:px-6 sm:text-[0.9375rem]">
                    {ctaLabel}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent transition-colors duration-200 ease-argo group-hover:bg-accent-deep sm:h-[48px] sm:w-[48px]"
                  >
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 ease-argo group-hover:rotate-45"
                      strokeWidth={1.75}
                    />
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
