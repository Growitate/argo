import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { STATS, type StatItem } from '../data/siteData';
import { useCountUp } from '../hooks/useCountUp';
import { Reveal } from './Reveal';

function StatCell({
  stat,
  inView,
  index,
}: {
  stat: StatItem;
  inView: boolean;
  index: number;
}) {
  const counted = useCountUp(stat.numericTarget, inView, 1600);

  const displayValue =
    counted !== null
      ? `${counted}${stat.suffix}`
      : stat.placeholderText ?? 'XX+';

  return (
    <div
      className={`flex flex-col justify-between px-2 py-6 sm:px-6 lg:py-4 ${
        index > 0 ? 'border-t border-hairline sm:border-t-0 lg:border-l' : ''
      }`}
    >
      <div className="text-[2.625rem] font-light leading-none tracking-[-0.02em] text-ink tabular-nums xl:text-[3.5rem]">
        {displayValue}
      </div>
      <p className="mt-3 text-[0.875rem] leading-[1.45] text-ink-soft">
        {stat.label}
      </p>
    </div>
  );
}

export function TrustStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-20px' });

  return (
    <section
      id="trust"
      ref={sectionRef}
      aria-label="Experience and client trust"
      className="mx-auto max-w-[1280px] py-12 md:py-16 lg:py-24"
    >
      <Reveal>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {STATS.map((stat, index) => (
            <StatCell key={stat.id} stat={stat} inView={inView} index={index} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
