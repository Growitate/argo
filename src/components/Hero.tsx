import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES, SITE_META } from '../data/siteData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Navbar } from './Navbar';
import { HeroTabs } from './HeroTabs';
import { ARGO_EASE } from './Reveal';

const AUTOPLAY_MS = 6000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll parallax: translates hero background at ~0.2x speed, capped at 60px
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 60]
  );

  // Autoplay every 6s unless hovered, focused, or prefers-reduced-motion is enabled
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, isPaused]);

  const activeSlide = HERO_SLIDES[activeIndex];
  const activeNumber = String(activeIndex + 1).padStart(2, '0');
  const totalNumber = String(HERO_SLIDES.length).padStart(2, '0');

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-labelledby="hero-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      className="relative flex min-h-[600px] flex-col justify-between overflow-hidden rounded-[20px] bg-ink md:min-h-[min(88vh,760px)] md:rounded-[28px]"
    >
      {/* Floating Navbar inside hero */}
      <Navbar />

      {/* Parallax + Ken Burns crossfading hero background */}
      <motion.div
        style={{ y: parallaxY }}
        className="pointer-events-none absolute -top-[30px] bottom-[-30px] left-0 right-0"
        aria-hidden="true"
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={activeSlide.id}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            loading="eager"
            fetchPriority="high"
            initial={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 1.06,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: prefersReducedMotion ? 0.2 : 0.7, ease: ARGO_EASE },
              scale: { duration: prefersReducedMotion ? 0 : 8, ease: 'easeOut' },
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Legibility gradients */}
        <div
          className="absolute inset-0"
          style={{ background: 'var(--hero-overlay)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,28,22,0.34) 0%, rgba(10,28,22,0.06) 35%, rgba(10,28,22,0.52) 100%)',
          }}
        />
      </motion.div>

      {/* Main foreground content */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-4 pt-28 sm:px-8 md:justify-center md:px-12 md:pt-32 lg:px-16">
        <div className="flex items-center justify-between gap-8">
          <div
            id="hero-slide-panel"
            role="tabpanel"
            aria-labelledby={`hero-tab-${activeSlide.id}`}
            className="max-w-[820px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: prefersReducedMotion ? 0 : 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.35 }}
              >
                <h1
                  id="hero-heading"
                  className="text-[clamp(2.5rem,5.2vw,4.75rem)] font-light leading-[1.12] tracking-[-0.02em] text-[#F7F5F0]"
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
                      <span>{activeSlide.line1}</span>
                      <motion.span
                        aria-hidden="true"
                        initial={{ scaleX: prefersReducedMotion ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: prefersReducedMotion ? 0.2 : 0.7,
                          delay: prefersReducedMotion ? 0 : 0.4,
                          ease: ARGO_EASE,
                        }}
                        className="hidden h-px w-[84px] origin-left bg-accent sm:inline-block md:w-[120px]"
                      />
                    </motion.span>
                  </span>
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
                      {activeSlide.line2}
                    </motion.span>
                  </span>
                </h1>

                {activeSlide.supporting && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : 20,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0.2 : 0.5,
                      delay: prefersReducedMotion ? 0 : 0.16,
                      ease: ARGO_EASE,
                    }}
                    className="mt-5 max-w-[46ch] text-justify text-[0.9375rem] font-normal leading-[1.6] text-white/85 sm:text-[1.0625rem]"
                  >
                    {activeSlide.supporting}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Primary CTA group: Lime pill + 8px gap + 52px lime circle */}
            <div className="mt-7 flex items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 active:scale-[0.98]"
              >
                <span className="inline-flex h-[52px] items-center rounded-full bg-accent px-7 text-[0.9375rem] font-medium text-on-accent transition-colors duration-200 ease-argo group-hover:bg-accent-deep">
                  {SITE_META.heroCtaLabel}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-accent text-on-accent transition-colors duration-200 ease-argo group-hover:bg-accent-deep"
                >
                  <ArrowUpRight
                    className="h-5 w-5 transition-transform duration-300 ease-argo group-hover:rotate-45"
                    strokeWidth={1.75}
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* Right edge vertical slide indicator (desktop only) */}
          <div
            aria-label={`Slide ${activeNumber} of ${totalNumber}`}
            className="hidden flex-col items-center gap-1.5 text-[11px] font-medium tabular-nums tracking-wider text-white/70 lg:flex"
          >
            <span>{activeNumber}</span>
            <div className="relative h-24 w-[2px] overflow-hidden rounded-full bg-white/25">
              <motion.div
                animate={{
                  top: `${(activeIndex / HERO_SLIDES.length) * 100}%`,
                  height: `${100 / HERO_SLIDES.length}%`,
                }}
                transition={{ duration: prefersReducedMotion ? 0.15 : 0.45, ease: ARGO_EASE }}
                className="absolute left-0 right-0 rounded-full bg-accent"
              />
            </div>
            <span>{totalNumber}</span>
          </div>
        </div>
      </div>

      {/* Bottom frosted glass tab rail */}
      <div className="relative z-10 px-4 pb-4 pt-2 sm:px-6 md:px-6 md:pb-6">
        <HeroTabs
          slides={HERO_SLIDES}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          isPaused={isPaused}
          intervalMs={AUTOPLAY_MS}
        />
      </div>
    </section>
  );
}
