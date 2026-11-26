import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CONTACT_CONTENT, PARTNERS, SITE_META } from '../data/siteData';
import { Pill } from './Pill';
import { Reveal } from './Reveal';

interface ContactProps {
  preselectedService?: string;
}

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: CONTACT_CONTENT.serviceOptions[0],
  message: '',
};

export function Contact({ preselectedService = '' }: ContactProps) {
  const [form, setForm] = useState<FormState>(() => ({
    ...INITIAL_FORM,
    service: preselectedService || CONTACT_CONTENT.serviceOptions[0],
  }));

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const buildMailtoUrl = (state: FormState) => {
    const subject = encodeURIComponent(
      `Enquiry: ${state.service} — ${state.name.trim()}${
        state.company.trim() ? ` (${state.company.trim()})` : ''
      }`
    );
    const bodyLines = [
      `Name: ${state.name.trim()}`,
      `Company: ${state.company.trim() || 'Not specified'}`,
      `Email: ${state.email.trim()}`,
      `Phone: ${state.phone.trim()}`,
      `Service: ${state.service}`,
      '',
      'Requirement:',
      state.message.trim(),
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    return `mailto:${SITE_META.email}?subject=${subject}&body=${body}`;
  };

  const hasEnteredDetails = Boolean(
    form.name.trim() ||
      form.company.trim() ||
      form.email.trim() ||
      form.phone.trim() ||
      form.message.trim()
  );
  const directMailtoUrl = hasEnteredDetails
    ? buildMailtoUrl(form)
    : `mailto:${SITE_META.email}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mt-6 rounded-card bg-ink p-5 text-white sm:mt-8 sm:p-10 md:mt-12 md:rounded-panel lg:p-14"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left column: direct partner contact info */}
        <Reveal className="flex flex-col justify-between lg:col-span-5">
          <div>
            <Pill variant="on-dark">{CONTACT_CONTENT.pill}</Pill>
            <h2
              id="contact-heading"
              className="mt-5 text-[clamp(1.65rem,2.6vw,2.25rem)] font-normal leading-[1.18] tracking-[-0.015em] text-[#F7F5F0]"
            >
              {CONTACT_CONTENT.firmName}
            </h2>

            <div className="mt-5">
              <div className="flex items-center gap-2 text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-accent">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                <span>{CONTACT_CONTENT.addressLabel}</span>
              </div>
              <ul className="mt-3 space-y-3 text-left text-[0.9375rem] leading-[1.6] text-white/85 sm:text-justify">
                {CONTACT_CONTENT.addresses.map((address) => (
                  <li key={address}>{address}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-5 border-t border-white/15 pt-8">
              <a
                href={`mailto:${SITE_META.email}`}
                className="group flex min-h-[44px] items-center gap-3.5 text-white/90 transition-colors hover:text-accent"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                  <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[0.6875rem] uppercase tracking-[0.08em] text-white/60">
                    Email
                  </span>
                  <span className="break-all text-[0.9375rem] font-medium sm:text-base">
                    {SITE_META.email}
                  </span>
                </div>
              </a>

              {PARTNERS.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.phoneHref}
                  className="group flex min-h-[44px] items-center gap-3.5 text-white/90 transition-colors hover:text-accent"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                    <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[0.6875rem] uppercase tracking-[0.08em] text-white/60">
                      {partner.name}
                    </span>
                    <span className="text-[0.9375rem] font-medium tabular-nums sm:text-base">
                      {partner.phoneDisplay}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-2">
            <a
              href={SITE_META.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-accent px-6 text-[0.9375rem] font-medium text-on-accent transition-colors duration-200 ease-argo hover:bg-accent-deep active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-argo group-hover:rotate-45"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>

        {/* Right column: white form card */}
        <Reveal delay={0.12} className="lg:col-span-7">
          <div className="rounded-card bg-white p-5 text-ink sm:p-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              className="space-y-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink placeholder:text-ink-soft/60 focus:border-ink sm:text-[0.9375rem]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                  >
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, company: e.target.value }))
                    }
                    placeholder="Organisation name"
                    className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink placeholder:text-ink-soft/60 focus:border-ink sm:text-[0.9375rem]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="you@company.com"
                    className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink placeholder:text-ink-soft/60 focus:border-ink sm:text-[0.9375rem]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+91 98XXX XXXXX"
                    className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink placeholder:text-ink-soft/60 focus:border-ink sm:text-[0.9375rem]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                >
                  Service
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, service: e.target.value }))
                  }
                  className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink focus:border-ink sm:text-[0.9375rem]"
                >
                  {CONTACT_CONTENT.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Briefly describe your finance function needs or advisory timeline..."
                  className="w-full rounded-xl border border-hairline bg-surface p-4 text-base text-ink placeholder:text-ink-soft/60 focus:border-ink sm:text-[0.9375rem]"
                />
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-3 rounded-xl border border-hairline bg-surface px-4 py-3.5 text-[0.9375rem] leading-[1.55] text-ink sm:items-center">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
                    <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className="min-w-0">
                    Kindly share the above details on{' '}
                    <a
                      href={directMailtoUrl}
                      className="break-all font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-ink-soft"
                    >
                      {SITE_META.email}
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
