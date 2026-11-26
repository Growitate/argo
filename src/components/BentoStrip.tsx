import { BENTO_CARDS } from '../data/siteData';
import { BentoCard } from './BentoCard';
import { Reveal } from './Reveal';

const ASTERISK_PATH_D =
  'M 0.7244 0.2800 C 0.7930 0.3188, 1.0654 0.4069, 1.0950 0.4500 C 1.1247 0.4931, 0.9818 0.5380, 0.9022 0.5384 C 0.8227 0.5388, 0.6713 0.4557, 0.6180 0.4524 C 0.5647 0.4491, 0.5826 0.4415, 0.5822 0.5185 C 0.5818 0.5955, 0.6392 0.8680, 0.6155 0.9144 C 0.5918 0.9608, 0.4801 0.8634, 0.4400 0.7969 C 0.3999 0.7304, 0.3985 0.5619, 0.3748 0.5155 C 0.3512 0.4691, 0.3669 0.4803, 0.2978 0.5185 C 0.2288 0.5566, 0.0138 0.7411, -0.0395 0.7444 C -0.0929 0.7477, -0.0616 0.6053, -0.0222 0.5384 C 0.0172 0.4716, 0.1672 0.3862, 0.1968 0.3431 C 0.2265 0.3000, 0.2243 0.3188, 0.1556 0.2800 C 0.0870 0.2412, -0.1854 0.1531, -0.2150 0.1100 C -0.2447 0.0669, -0.1018 0.0220, -0.0222 0.0216 C 0.0573 0.0212, 0.2087 0.1043, 0.2620 0.1076 C 0.3153 0.1109, 0.2974 0.1185, 0.2978 0.0415 C 0.2982 -0.0355, 0.2408 -0.3080, 0.2645 -0.3544 C 0.2882 -0.4008, 0.3999 -0.3034, 0.4400 -0.2369 C 0.4801 -0.1704, 0.4815 -0.0019, 0.5052 0.0445 C 0.5288 0.0909, 0.5131 0.0797, 0.5822 0.0415 C 0.6512 0.0034, 0.8662 -0.1811, 0.9195 -0.1844 C 0.9729 -0.1877, 0.9416 -0.0453, 0.9022 0.0216 C 0.8628 0.0884, 0.7128 0.1738, 0.6832 0.2169 C 0.6535 0.2600, 0.6557 0.2412, 0.7244 0.2800 Z';

export function BentoStrip() {
  return (
    <section aria-label="Firm overview" className="mx-auto mt-8 max-w-[1280px]">
      {/* Shared SVG clipPath definition for the centre organic starburst card */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="argo-asterisk-mask" clipPathUnits="objectBoundingBox">
            <path d={ASTERISK_PATH_D} />
          </clipPath>
        </defs>
      </svg>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-[1fr_1.1fr_1fr] lg:items-center">
        {BENTO_CARDS.map((card, index) => {
          const isCenter = card.variant === 'accent';
          const responsiveOrderClass = isCenter
            ? 'md:order-first md:col-span-2 lg:order-none lg:col-span-1'
            : '';

          return (
            <Reveal
              key={card.id}
              delay={index * 0.12}
              className={`${responsiveOrderClass} h-full`.trim()}
            >
              <BentoCard item={card} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
