import { MapPin } from 'lucide-react';
import { LOCATIONS } from '../data/siteData';
import { Pill } from './Pill';
import { Reveal } from './Reveal';

const INDIA_OUTLINE_PATH =
  'M 175 22 L 205 18 L 235 32 L 242 58 L 222 74 L 242 95 L 272 118 L 288 138 L 326 152 L 350 152 L 355 132 L 376 136 L 376 156 L 402 146 L 438 116 L 468 128 L 474 158 L 446 184 L 442 224 L 424 240 L 412 212 L 400 182 L 366 178 L 354 198 L 360 226 L 342 246 L 328 286 L 294 326 L 258 360 L 228 386 L 218 434 L 208 488 L 190 534 L 176 538 L 156 496 L 142 438 L 132 376 L 124 332 L 118 294 L 92 288 L 66 266 L 76 246 L 104 244 L 84 224 L 98 202 L 112 170 L 132 132 L 144 96 L 140 62 L 156 36 Z';

export function Locations() {
  const primaryPin = LOCATIONS.find((loc) => loc.type === 'primary-base');
  const metroPins = LOCATIONS.filter((loc) => loc.type === 'metro-presence');

  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="mx-auto max-w-[1280px] py-12 md:py-16 lg:py-24"
    >
      <Reveal className="text-center">
        <Pill>WHERE WE WORK</Pill>
        <h2
          id="locations-heading"
          className="mx-auto mt-5 max-w-[26ch] text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
        >
          Delivery from Tier 2. Presence in Major Business Centres.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 items-center gap-8 md:mt-12 lg:grid-cols-12 lg:gap-10">
        {/* Stylised dotted India SVG map */}
        <Reveal className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-card bg-surface p-6 sm:p-8">
            <div className="mx-auto max-w-[440px]">
              <svg
                viewBox="0 0 500 560"
                role="img"
                aria-label="Stylised India map showing Tier 2 primary delivery base and metro client presence markers"
                className="h-auto w-full"
              >
                <defs>
                  <pattern
                    id="india-dot-grid"
                    width="12"
                    height="12"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="6" cy="6" r="1.8" fill="rgba(18, 55, 46, 0.24)" />
                  </pattern>
                </defs>

                {/* Dotted filled India silhouette */}
                <path
                  d={INDIA_OUTLINE_PATH}
                  fill="url(#india-dot-grid)"
                  stroke="rgba(18, 55, 46, 0.35)"
                  strokeWidth="2"
                  strokeDasharray="4 5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Dashed connection arcs from primary base to metro centres */}
                {primaryPin &&
                  metroPins.map((pin) => (
                    <line
                      key={`line-${pin.id}`}
                      x1={primaryPin.x}
                      y1={primaryPin.y}
                      x2={pin.x}
                      y2={pin.y}
                      stroke="rgba(18, 55, 46, 0.35)"
                      strokeWidth="1.75"
                      strokeDasharray="5 5"
                    />
                  ))}

                {/* Metro presence pins (deep forest ink) */}
                {metroPins.map((pin) => (
                  <g key={pin.id} transform={`translate(${pin.x}, ${pin.y})`}>
                    <circle r="13" fill="rgba(18, 55, 46, 0.14)" />
                    <circle
                      r="7.5"
                      fill="#12372E"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                  </g>
                ))}

                {/* Primary delivery base pin (lime with subtle pulsing ring) */}
                {primaryPin && (
                  <g transform={`translate(${primaryPin.x}, ${primaryPin.y})`}>
                    <circle
                      r="14"
                      fill="#B7E52C"
                      className="animate-pulse-ring origin-center"
                      style={{ transformBox: 'fill-box' }}
                    />
                    <circle
                      r="10"
                      fill="#B7E52C"
                      stroke="#12372E"
                      strokeWidth="2.5"
                    />
                    <circle r="3" fill="#12372E" />
                  </g>
                )}
              </svg>
            </div>

            {/* Compact map legend bar */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 border-t border-hairline pt-4 text-[0.8125rem] text-ink">
              <span className="inline-flex items-center gap-2 font-medium">
                <span
                  aria-hidden="true"
                  className="h-3.5 w-3.5 rounded-full border-2 border-ink bg-accent"
                />
                Primary Delivery Base (Tier 2)
              </span>
              <span className="inline-flex items-center gap-2 font-medium">
                <span
                  aria-hidden="true"
                  className="h-3.5 w-3.5 rounded-full border-2 border-white bg-ink shadow-sm"
                />
                Metro Client Presence
              </span>
            </div>
          </div>
        </Reveal>

        {/* Legend cards */}
        <div className="space-y-4 md:space-y-6 lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="rounded-card bg-surface p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink-soft">
                    Primary Delivery Base
                  </span>
                  <h3 className="text-[1.125rem] font-medium text-ink">
                    {primaryPin?.cityPlaceholder}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                {primaryPin?.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-card bg-surface p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink-soft">
                    Metro Presence
                  </span>
                  <h3 className="text-[1.125rem] font-medium text-ink">
                    Mumbai &amp; Major Business Centres
                  </h3>
                </div>
              </div>
              <ul className="mt-3 space-y-2.5 text-[0.9375rem] leading-[1.6] text-ink-soft">
                {metroPins.map((pin) => (
                  <li key={pin.id} className="border-t border-hairline pt-2.5 first:border-t-0 first:pt-0">
                    <span className="block font-medium text-ink">
                      {pin.cityPlaceholder}
                    </span>
                    <span>{pin.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
