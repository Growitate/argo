import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ABOUT_CONTENT } from '../data/siteData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Navbar } from './Navbar';
import { Pill } from './Pill';
import { ARGO_EASE, Reveal } from './Reveal';

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden rounded-[20px] bg-ink text-white md:rounded-[28px]"
    >
      <Navbar />

      {/* Subtle architectural gradient wash inside dark hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(183,229,44,0.14),transparent_52%)]"
      />

      <div className="relative z-10 px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 md:px-12 md:pb-16 md:pt-36 lg:px-16 lg:pb-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Pill variant="on-dark">{ABOUT_CONTENT.pill}</Pill>

            <h1
              id="about-heading"
              className="mt-5 text-[clamp(1.85rem,4.6vw,4rem)] font-light leading-[1.12] tracking-[-0.02em] text-[#F7F5F0]"
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
                  <span>{ABOUT_CONTENT.heading}</span>
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
            </h1>

            <div className="mt-5 space-y-4 text-left text-[0.9375rem] leading-[1.65] text-white/80 sm:mt-6 sm:text-justify sm:text-base">
              {ABOUT_CONTENT.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
              <Link
                to="/contact"
                className="group inline-flex max-w-full items-center gap-2 active:scale-[0.98]"
              >
                <span className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-[0.875rem] font-medium text-on-accent transition-colors duration-200 ease-argo group-hover:bg-accent-deep sm:h-[48px] sm:px-6 sm:text-[0.9375rem]">
                  Speak With Our Partners
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
            </div>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-card bg-white/10">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={ABOUT_CONTENT.image}
                  alt={ABOUT_CONTENT.imageAlt}
                  loading="eager"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
