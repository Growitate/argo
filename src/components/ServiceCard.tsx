import {
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  FileSpreadsheet,
  Handshake,
  Landmark,
  PieChart,
  ShieldCheck,
} from 'lucide-react';
import type { ServiceIconName, ServiceItem } from '../data/siteData';
import { ArrowButton } from './ArrowButton';

const ICON_MAP: Record<ServiceIconName, typeof Handshake> = {
  Handshake,
  BriefcaseBusiness,
  PieChart,
  Landmark,
  BookOpenCheck,
  FileSpreadsheet,
  Calculator,
  ShieldCheck,
};

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon];

  return (
    <button
      type="button"
      onClick={() => onSelect(service)}
      aria-label={`Explore ${service.title}`}
      className="service-card group relative flex h-60 w-full flex-col justify-between overflow-hidden rounded-card bg-ink text-left transition-transform duration-300 ease-argo hover:-translate-y-1.5 hover:shadow-card active:scale-[0.99] sm:h-80 lg:h-[340px]"
    >
      {/* Full-bleed photography */}
      <img
        src={service.image}
        alt={service.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[600ms] ease-argo group-hover:scale-[1.06]"
      />

      {/* Base bottom legibility gradient + deeper hover gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[rgba(10,28,22,0.82)] via-[rgba(10,28,22,0.22)] to-transparent transition-opacity duration-500 ease-argo"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[rgba(10,28,22,0.92)] via-[rgba(10,28,22,0.42)] to-transparent opacity-0 transition-opacity duration-500 ease-argo group-hover:opacity-100 group-focus-visible:opacity-100"
      />

      {/* Top-left 44px lime icon badge */}
      <div className="relative z-10 p-5">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-ink transition-transform duration-300 ease-argo group-hover:scale-[1.08]">
          <Icon className="h-[21px] w-[21px]" strokeWidth={1.75} aria-hidden="true" />
        </span>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 flex items-end justify-between gap-3 p-5">
        <div className="min-w-0 flex-1">
          <h3 className="text-[1.1875rem] font-medium leading-[1.3] text-white xl:text-[1.25rem]">
            {service.title}
          </h3>
          <p className="service-descriptor mt-1.5 line-clamp-2 text-[0.875rem] leading-[1.45] text-white/80">
            {service.shortDescription}
          </p>
        </div>
        <ArrowButton variant="dark" size="md" />
      </div>
    </button>
  );
}
