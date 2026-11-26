import { lazy, Suspense, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES, SERVICES_HEADER, type ServiceItem } from '../data/siteData';
import { Reveal } from './Reveal';
import { ServiceCard } from './ServiceCard';

const LazyServiceDrawer = lazy(() => import('./ServiceDrawer'));

interface ServicesProps {
  showExploreLink?: boolean;
}

export function Services({ showExploreLink = false }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const navigate = useNavigate();

  const handleRequestProposal = (serviceTitle: string) => {
    setSelectedService(null);
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mt-8 scroll-mt-[72px] rounded-card bg-surface px-4 pb-12 pt-8 sm:px-6 md:mt-10 md:rounded-panel md:px-10 md:pb-14 md:pt-10 lg:mt-12 lg:px-12 lg:pb-16 lg:pt-10"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="text-center">
          <h2
            id="services-heading"
            className="mx-auto max-w-[26ch] text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
          >
            {SERVICES_HEADER.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-[64ch] text-left text-[0.9375rem] leading-[1.6] text-ink-soft sm:text-justify sm:text-base">
            {SERVICES_HEADER.subheading}
          </p>
        </Reveal>

        {/* Responsive 8-card layout (mobile: vertical stack, tablet: 2 per row centered, desktop: 4 + 4 centered) */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:justify-center md:mt-8 md:gap-6">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.06}
              className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <ServiceCard service={service} onSelect={setSelectedService} />
            </Reveal>
          ))}
        </div>

        {showExploreLink && (
          <Reveal delay={0.15} className="mt-8 border-t border-hairline pt-7 text-center sm:mt-10 sm:pt-8">
            <Link
              to="/services"
              className="group inline-flex min-h-[44px] max-w-full items-center gap-2 rounded-full border border-hairline bg-bg px-5 text-[0.8125rem] font-medium text-ink transition-colors duration-200 ease-argo hover:border-accent hover:bg-accent sm:px-6 sm:text-[0.875rem]"
            >
              <span>Explore Services, Sectors &amp; Hands-on Tools</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-argo group-hover:rotate-45"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        )}
      </div>

      {/* Code-split Service Drawer */}
      <Suspense fallback={null}>
        <AnimatePresence>
          {selectedService && (
            <LazyServiceDrawer
              service={selectedService}
              onClose={() => setSelectedService(null)}
              onRequestProposal={handleRequestProposal}
            />
          )}
        </AnimatePresence>
      </Suspense>
    </section>
  );
}
