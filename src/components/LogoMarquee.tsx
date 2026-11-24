import { CLIENT_LOGOS, type ClientLogoSlot } from '../data/siteData';

function LogoSlotCard({ slot }: { slot: ClientLogoSlot }) {
  return (
    <div
      className="group flex h-16 shrink-0 items-center gap-3 rounded-2xl border border-hairline bg-surface/60 px-6 grayscale opacity-60 transition-all duration-300 ease-argo hover:border-accent hover:bg-surface hover:grayscale-0 hover:opacity-100"
      title={slot.isPlaceholder ? `${slot.label} (Placeholder — swap in siteData.ts)` : slot.label}
    >
      {slot.logoUrl ? (
        <img
          src={slot.logoUrl}
          alt={slot.label}
          loading="lazy"
          className="h-8 w-auto object-contain"
        />
      ) : (
        <>
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/10 text-ink transition-colors duration-300 group-hover:bg-accent"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-ink" />
          </span>
          <span className="whitespace-nowrap text-[0.8125rem] font-medium tracking-[0.04em] text-ink">
            {slot.label}
          </span>
        </>
      )}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div className="mt-14 border-t border-hairline pt-12">
      <p className="text-center text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink-soft">
        Trusted by
      </p>

      <div className="marquee-mask relative mt-6 overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee gap-4 py-1">
          <div className="flex shrink-0 items-center gap-4">
            {CLIENT_LOGOS.map((slot) => (
              <LogoSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
            {CLIENT_LOGOS.map((slot) => (
              <LogoSlotCard key={`${slot.id}-dup`} slot={slot} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-ink-soft/75">
        Client logo slots are placeholders pending supply of official client marks.
      </p>
    </div>
  );
}
