import { Mail, MessageCircle, Phone } from 'lucide-react';
import { PARTNERS } from '../data/siteData';
import { Pill } from './Pill';
import { Reveal } from './Reveal';

export function Partners() {
  return (
    <section
      id="partners"
      aria-label="Leadership"
      className="mx-auto max-w-[1280px] pt-8 pb-6 md:pt-10 md:pb-8 lg:pt-12 lg:pb-12"
    >
      <Reveal className="text-center">
        <Pill>LEADERSHIP</Pill>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-[1040px] grid-cols-1 gap-6 sm:mt-10 md:mt-12 md:grid-cols-2 lg:gap-8">
        {PARTNERS.map((partner, idx) => (
          <Reveal key={partner.id} delay={idx * 0.12}>
            <article className="group flex h-full flex-col justify-between rounded-card bg-surface p-5 transition-all duration-250 ease-argo hover:-translate-y-1.5 hover:shadow-card sm:p-7">
              <div>
                {/* Responsive portrait (desktop) / landscape (mobile) */}
                <div
                  className={`${
                    partner.mobileImage ? 'aspect-[3/2] md:aspect-[4/5]' : 'aspect-[4/5]'
                  } w-full overflow-hidden rounded-[20px] bg-surface-2`}
                >
                  <picture
                    className={`block h-full w-full ${partner.imageWrapperClass ?? ''}`}
                  >
                    {partner.mobileImage && (
                      <source media="(max-width: 767px)" srcSet={partner.mobileImage} />
                    )}
                    <img
                      src={partner.image}
                      alt={partner.imageAlt}
                      loading="lazy"
                      className={`h-full w-full object-cover ${
                        partner.imagePositionClass ?? 'object-top'
                      } transition-all duration-500 ease-argo group-hover:scale-[1.03] ${
                        partner.isPlaceholder ? 'grayscale group-hover:grayscale-0' : ''
                      }`}
                    />
                  </picture>
                </div>

                <div className="mt-5 flex flex-wrap items-start justify-between gap-3 sm:mt-6 sm:flex-nowrap sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[1.375rem] font-medium leading-[1.3] text-ink sm:text-[1.5rem]">
                      {partner.name}
                    </h3>
                    <p className="mt-1 text-[0.875rem] font-medium text-ink-soft">
                      {partner.designation}
                    </p>
                  </div>

                  {/* Direct icon links for phone and email */}
                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href={partner.phoneHref}
                      aria-label={`Call ${partner.name} at ${partner.phoneDisplay}`}
                      title={partner.phoneDisplay}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-bg text-ink transition-colors hover:border-accent hover:bg-accent"
                    >
                      <Phone className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                    </a>
                    <a
                      href={`mailto:${partner.email}`}
                      aria-label={`Email ${partner.name} at ${partner.email}`}
                      title={partner.email}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-bg text-ink transition-colors hover:border-accent hover:bg-accent"
                    >
                      <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-left text-[0.9375rem] leading-[1.6] text-ink-soft sm:text-justify">
                  {partner.bioParagraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Action pill buttons */}
              <div className="mt-6 flex flex-wrap gap-2.5 border-t border-hairline pt-5 sm:gap-3">
                <a
                  href={partner.phoneHref}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-hairline bg-bg px-3.5 text-[0.8125rem] font-medium text-ink transition-colors hover:border-ink/30 hover:bg-surface-2 sm:px-5 sm:text-[0.875rem] md:min-h-[44px]"
                >
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span>Call {partner.phoneDisplay}</span>
                </a>
                <a
                  href={partner.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat on WhatsApp regarding ${partner.name}`}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-4 text-[0.8125rem] font-medium text-on-accent transition-colors hover:bg-accent-deep sm:flex-initial sm:px-5 sm:text-[0.875rem] md:min-h-[44px]"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
