import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { HeroSlide } from '../data/siteData';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeroTabsProps {
  slides: HeroSlide[];
  activeIndex: number;
  onSelect: (index: number) => void;
  isPaused: boolean;
  intervalMs: number;
}

export function HeroTabs({
  slides,
  activeIndex,
  onSelect,
  isPaused,
  intervalMs,
}: HeroTabsProps) {
  const prefersReducedMotion = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    let nextIdx: number | null = null;
    if (e.key === 'ArrowRight') {
      nextIdx = (idx + 1) % slides.length;
    } else if (e.key === 'ArrowLeft') {
      nextIdx = (idx - 1 + slides.length) % slides.length;
    } else if (e.key === 'Home') {
      nextIdx = 0;
    } else if (e.key === 'End') {
      nextIdx = slides.length - 1;
    }

    if (nextIdx !== null) {
      e.preventDefault();
      onSelect(nextIdx);
      tabRefs.current[nextIdx]?.focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Hero highlights"
      className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto md:grid md:grid-cols-3 md:gap-4 md:overflow-visible"
    >
      {slides.map((slide, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={slide.id}
            ref={(el) => {
              tabRefs.current[idx] = el;
            }}
            id={`hero-tab-${slide.id}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls="hero-slide-panel"
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={`relative flex h-12 min-w-[66%] shrink-0 snap-start items-center justify-center overflow-hidden rounded-2xl px-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.05em] transition-all duration-300 ease-argo sm:min-w-[44%] md:h-14 md:min-w-0 md:rounded-[20px] md:px-4 md:text-[0.75rem] lg:px-5 lg:text-[0.8125rem] ${
              isActive
                ? 'bg-white text-ink shadow-sm'
                : 'border border-white/15 bg-[var(--glass)] text-white/85 backdrop-blur-[14px] hover:bg-white/35 hover:text-white'
            }`}
          >
            <span className="truncate">{slide.tabLabel}</span>

            {/* 2px lime autoplay progress bar across active tab bottom edge */}
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-ink/10"
              >
                {prefersReducedMotion || isPaused ? (
                  <span className="block h-full w-full bg-accent" />
                ) : (
                  <motion.span
                    key={`progress-${slide.id}-${activeIndex}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: intervalMs / 1000,
                      ease: 'linear',
                    }}
                    className="block h-full w-full origin-left bg-accent"
                  />
                )}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
