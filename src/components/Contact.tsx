import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CONTACT_CONTENT, PARTNERS, SITE_META } from '../data/siteData';
import { FormSuccessView } from './FormSuccessView';
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
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: CONTACT_CONTENT.serviceOptions[0],
  message: '',
  consent: false,
};

export function Contact({ preselectedService = '' }: ContactProps) {
  const [form, setForm] = useState<FormState>(() => ({
    ...INITIAL_FORM,
    service: preselectedService || CONTACT_CONTENT.serviceOptions[0],
  }));
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMailto, setSubmittedMailto] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFailure, setSubmitFailure] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (state: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!state.name.trim()) {
      next.name = 'Please enter your full name.';
    }
    if (!state.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!state.phone.trim()) {
      next.phone = 'Please enter a contact phone number.';
    } else if (!/^[+\d\s()-]{7,20}$/.test(state.phone.trim())) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (!state.message.trim()) {
      next.message = 'Please share a brief overview of your requirement.';
    }
    if (!state.consent) {
      next.consent = 'Please confirm consent so our partners can respond to your enquiry.';
    }
    return next;
  };

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitFailure(null);

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(form),
        });
        if (!res.ok) {
          throw new Error('Unable to send enquiry at this moment.');
        }
        setSubmittedMailto(null);
        setSubmitSuccess(true);
      } else {
        const mailtoUrl = buildMailtoUrl(form);
        setSubmittedMailto(mailtoUrl);
        window.location.href = mailtoUrl;
        setSubmitSuccess(true);
      }
    } catch {
      setSubmitFailure(
        `We could not submit the form automatically. Please email us directly at ${SITE_META.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({
      ...INITIAL_FORM,
      service: preselectedService || CONTACT_CONTENT.serviceOptions[0],
    });
    setErrors({});
    setSubmitSuccess(false);
    setSubmittedMailto(null);
    setSubmitFailure(null);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mt-8 rounded-card bg-ink p-6 text-white sm:p-10 md:mt-12 md:rounded-panel lg:p-14"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
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
              <ul className="mt-3 space-y-3 text-justify text-[0.9375rem] leading-[1.6] text-white/85">
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
                <div>
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
                  <div>
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
          <div className="rounded-card bg-white p-6 text-ink sm:p-8">
            <div aria-live="polite">
              {submitSuccess ? (
                <FormSuccessView
                  title="Enquiry Ready"
                  description={`Thank you, ${form.name.trim()}. Your enquiry has been prepared for`}
                  selectionHighlight={form.service}
                  recipientEmail={SITE_META.email}
                  mailtoUrl={submittedMailto}
                  resetLabel="Send another enquiry"
                  onReset={handleReset}
                />
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                      >
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, name: e.target.value }));
                          if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        placeholder="Your full name"
                        className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink placeholder:text-ink-soft/60 focus:border-ink"
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="mt-1 text-xs font-medium text-red-700">
                          {errors.name}
                        </p>
                      )}
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
                        className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink placeholder:text-ink-soft/60 focus:border-ink"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                      >
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, email: e.target.value }));
                          if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                        }}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        placeholder="you@company.com"
                        className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink placeholder:text-ink-soft/60 focus:border-ink"
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="mt-1 text-xs font-medium text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                      >
                        Phone <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, phone: e.target.value }));
                          if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                        }}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                        placeholder="+91 98XXX XXXXX"
                        className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink placeholder:text-ink-soft/60 focus:border-ink"
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" className="mt-1 text-xs font-medium text-red-700">
                          {errors.phone}
                        </p>
                      )}
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
                      className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink focus:border-ink"
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
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, message: e.target.value }));
                        if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Briefly describe your finance function needs or advisory timeline..."
                      className="w-full rounded-xl border border-hairline bg-surface p-4 text-[0.9375rem] text-ink placeholder:text-ink-soft/60 focus:border-ink"
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1 text-xs font-medium text-red-700">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        id="contact-consent"
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, consent: e.target.checked }));
                          if (errors.consent) setErrors((p) => ({ ...p, consent: undefined }));
                        }}
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
                        className="mt-0.5 h-5 w-5 shrink-0 rounded border-hairline accent-ink"
                      />
                      <span className="text-[0.8125rem] leading-[1.45] text-ink-soft">
                        I consent to {SITE_META.fullBrandName} contacting me regarding this enquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="contact-consent-error" className="mt-1 text-xs font-medium text-red-700">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {submitFailure && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      {submitFailure}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-[0.9375rem] font-medium text-on-accent transition-all duration-200 ease-argo hover:bg-accent-deep active:scale-[0.98] disabled:opacity-70 sm:w-auto"
                    >
                      <span>{isSubmitting ? 'Preparing Enquiry...' : 'Send Enquiry'}</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 ease-argo group-hover:rotate-45"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
