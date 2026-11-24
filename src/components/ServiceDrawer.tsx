import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpenCheck,
  Calculator,
  Check,
  FileSpreadsheet,
  Handshake,
  Landmark,
  PieChart,
  ShieldCheck,
  X,
} from 'lucide-react';
import type { ServiceIconName, ServiceItem } from '../data/siteData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ARGO_EASE } from './Reveal';

const ICON_MAP: Record<ServiceIconName, typeof Handshake> = {
  Handshake,
  PieChart,
  Landmark,
  BookOpenCheck,
  FileSpreadsheet,
  Calculator,
  ShieldCheck,
};

interface ServiceDrawerProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestProposal: (serviceTitle: string) => void;
}

export default function ServiceDrawer({
  service,
  onClose,
  onRequestProposal,
}: ServiceDrawerProps) {
  const prefersReducedMotion = useReducedMotion();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!service) return;

    const prevOverflow = document.body.style.overflow;
    const prevFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 30);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !drawerRef.current) return;

      const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      prevFocused?.focus?.();
    };
  }, [service, onClose]);

  if (!service) return null;

  const Icon = ICON_MAP[service.icon];

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.15 : 0.3 }}
        onClick={onClose}
        className="fixed inset-0 bg-ink/55 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Right-side drawer */}
      <motion.aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-drawer-title"
        initial={{ x: prefersReducedMotion ? 0 : '100%', opacity: prefersReducedMotion ? 0 : 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: prefersReducedMotion ? 0 : '100%', opacity: prefersReducedMotion ? 0 : 1 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, ease: ARGO_EASE }}
        className="relative z-10 flex h-full w-full max-w-lg flex-col justify-between overflow-y-auto bg-bg p-6 shadow-2xl sm:p-8"
      >
        <div>
          <div className="flex items-start justify-between gap-4 border-b border-hairline pb-5">
            <div className="flex items-center gap-3.5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h3
                  id="service-drawer-title"
                  className="text-xl font-medium text-ink sm:text-2xl"
                >
                  {service.title}
                </h3>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close service details"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-surface-2"
            >
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-surface">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-6 text-justify text-base leading-[1.65] text-ink-soft">
            {service.fullDescription}
          </p>

          <div className="mt-7 rounded-card bg-surface p-6">
            <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-ink">
              Key Deliverables
            </h4>
            <ul className="mt-4 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-ink">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
                  </span>
                  <span className="leading-[1.5] text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-hairline pt-6">
          <button
            type="button"
            onClick={() => onRequestProposal(service.title)}
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-[0.9375rem] font-medium text-on-accent transition-all duration-200 ease-argo hover:bg-accent-deep active:scale-[0.98]"
          >
            <span>Request a Proposal</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 ease-argo group-hover:rotate-45"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </button>
          <p className="mt-3 text-center text-xs text-ink-soft">
            Tailored to your business scale and direct partner scope.
          </p>
        </div>
      </motion.aside>
    </div>
  );
}
