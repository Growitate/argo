import { Compass, ShieldCheck, UserCheck } from 'lucide-react';
import { WHY_ARGO_CONTENT } from '../data/siteData';
import { Pill } from './Pill';
import { Reveal } from './Reveal';

const ICONS = [ShieldCheck, Compass, UserCheck];

export function WhyArgo() {
  return (
    <section
      id="why-argo"
      aria-labelledby="why-argo-heading"
      className="mx-auto max-w-[1280px] pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10"
    >
      <Reveal className="text-center">
        <Pill>{WHY_ARGO_CONTENT.pill}</Pill>
        <h2
          id="why-argo-heading"
          className="mx-auto mt-5 max-w-[24ch] text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
        >
          {WHY_ARGO_CONTENT.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[64ch] text-justify text-base leading-[1.65] text-ink-soft">
          {WHY_ARGO_CONTENT.intro}
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-6">
        {WHY_ARGO_CONTENT.items.map((item, idx) => {
          const Icon = ICONS[idx] ?? ShieldCheck;
          return (
            <Reveal key={item.id} delay={idx * 0.12}>
              <div className="flex h-full flex-col justify-between rounded-card bg-surface p-7 transition-all duration-250 ease-argo hover:-translate-y-1.5 hover:bg-surface-2/80 hover:shadow-card md:p-8">
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-ink">
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-[1.25rem] font-medium leading-[1.3] text-ink sm:text-[1.375rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-justify text-base leading-[1.65] text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.18} className="mt-8 text-center">
        <p className="mx-auto max-w-[66ch] rounded-2xl border border-hairline bg-surface/60 px-6 py-4 text-justify text-[0.9375rem] font-medium leading-[1.6] text-ink sm:text-base">
          {WHY_ARGO_CONTENT.differentiatorQuote}
        </p>
      </Reveal>
    </section>
  );
}
