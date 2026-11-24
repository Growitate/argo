import { Link } from 'react-router-dom';
import type { BentoItem } from '../data/siteData';
import { ArrowButton } from './ArrowButton';
import { Pill } from './Pill';

const ASTERISK_CLIP_PATH_ID = 'argo-asterisk-mask';

interface BentoCardProps {
  item: BentoItem;
}

export function BentoCard({ item }: BentoCardProps) {
  const isAccent = item.variant === 'accent';

  if (isAccent) {
    return (
      <Link
        to={item.href}
        className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-card bg-accent text-on-accent transition-all duration-250 ease-argo hover:-translate-y-1.5 hover:shadow-card lg:min-h-[388px]"
      >
        {/* Top ~62% photo masked with organic rounded asterisk SVG clipPath */}
        <div className="relative h-[248px] w-full shrink-0 overflow-hidden sm:h-[264px]">
          <div
            className="h-full w-full overflow-hidden"
            style={{ clipPath: `url(#${ASTERISK_CLIP_PATH_ID})` }}
          >
            <img
              src={item.image}
              alt={item.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-argo group-hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* Bottom content area */}
        <div className="flex flex-1 flex-col justify-end p-6 pt-3">
          {item.title ? (
            <>
              <div>
                <Pill variant="on-accent">{item.tag}</Pill>
              </div>
              <div className="mt-3.5 flex items-end justify-between gap-4">
                <h2 className="text-[1.25rem] font-medium leading-[1.3] text-on-accent sm:text-[1.375rem]">
                  {item.title}
                </h2>
                <ArrowButton variant="accent" />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <Pill variant="on-accent">{item.tag}</Pill>
              <ArrowButton variant="accent" />
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={item.href}
      className="group flex min-h-[340px] flex-col justify-between rounded-card bg-surface p-6 transition-all duration-250 ease-argo hover:-translate-y-1.5 hover:bg-surface-2/80 hover:shadow-card lg:min-h-[360px]"
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <Pill>{item.tag}</Pill>
          <ArrowButton variant="surface" />
        </div>
        {item.title && (
          <h2 className="mt-4 line-clamp-2 text-[1.25rem] font-medium leading-[1.3] text-ink sm:text-[1.375rem]">
            {item.title}
          </h2>
        )}
      </div>

      <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-surface-2">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-argo group-hover:scale-[1.04]"
        />
      </div>
    </Link>
  );
}
