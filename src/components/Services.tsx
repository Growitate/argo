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
      className="mt-12 rounded-card bg-surface px-4 py-12 sm:px-6 md:mt-16 md:rounded-panel md:px-10 md:py-16 lg:mt-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="text-center">
          <h2
            id="services-heading"
            className="mx-auto max-w-[26ch] text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
          >
            {SERVICES_HEADER.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[64ch] text-justify text-base leading-[1.65] text-ink-soft">
            {SERVICES_HEADER.subheading}
          </p>
        </Reveal>

        {/* Responsive 7-card layout (desktop: 4 + 3 centered, tablet: 2 per row centered, mobile: snap carousel) */}
        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mt-12 md:flex-wrap md:justify-center md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.08}
              className="w-[78%] shrink-0 snap-start sm:w-[62%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <ServiceCard service={service} onSelect={setSelectedService} />
            </Reveal>
          ))}
        </div>

        {showExploreLink && (
          <Reveal delay={0.15} className="mt-10 border-t border-hairline pt-8 text-center">
            <Link
              to="/services"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-hairline bg-bg px-6 text-[0.875rem] font-medium text-ink transition-colors duration-200 ease-argo hover:border-accent hover:bg-accent"
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
