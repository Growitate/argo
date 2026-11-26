import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { STATS, type StatItem } from '../data/siteData';
import { useCountUp } from '../hooks/useCountUp';

function StatCell({
  stat,
  inView,
  index,
}: {
  stat: StatItem;
  inView: boolean;
  index: number;
}) {
  const counted = useCountUp(stat.numericTarget, inView, 850);

  const displayValue =
    counted !== null
      ? `${counted}${stat.suffix}`
      : stat.placeholderText ?? 'XX+';

  const dividerClasses = [
    index >= 2 ? 'border-t border-hairline lg:border-t-0' : '',
    index % 2 === 1 ? 'border-l border-hairline' : '',
    index > 0 ? 'lg:border-l lg:border-hairline' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={`flex flex-col justify-between px-4 py-5 sm:px-6 sm:py-6 lg:py-4 ${dividerClasses}`}
    >
      <div className="text-[2.125rem] font-light leading-none tracking-[-0.02em] text-ink tabular-nums sm:text-[2.625rem] xl:text-[3.5rem]">
        {displayValue}
      </div>
      <p className="mt-2.5 text-[0.8125rem] leading-[1.45] text-ink-soft sm:mt-3 sm:text-[0.875rem]">
        {stat.label}
      </p>
    </div>
  );
}

export function TrustStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.25 });

  return (
    <section
      id="trust"
      ref={sectionRef}
      aria-label="Experience and client trust"
      className="mx-auto max-w-[1280px] py-8 sm:py-12 md:py-16 lg:py-24"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <StatCell key={stat.id} stat={stat} inView={inView} index={index} />
        ))}
      </div>
    </section>
  );
}
