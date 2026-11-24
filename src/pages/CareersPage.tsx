import { useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { FormSuccessView } from '../components/FormSuccessView';
import { PageHero } from '../components/PageHero';
import { Pill } from '../components/Pill';
import { Reveal } from '../components/Reveal';
import {
  CAREERS_CONTENT,
  CAREER_OPENINGS,
  MISSION_VISION,
  SITE_META,
} from '../data/siteData';

interface CareerFormState {
  name: string;
  email: string;
  phone: string;
  role: string;
  city: string;
  qualification: string;
  profileNote: string;
  consent: boolean;
}

type CareerFormErrors = Partial<Record<keyof CareerFormState, string>>;

const INITIAL_CAREER_FORM: CareerFormState = {
  name: '',
  email: '',
  phone: '',
  role: CAREER_OPENINGS[0]?.title ?? 'General Application',
  city: '',
  qualification: 'Qualified CA/CS/CMA',
  profileNote: '',
  consent: false,
};

export function CareersPage() {
  const [form, setForm] = useState<CareerFormState>(INITIAL_CAREER_FORM);
  const [errors, setErrors] = useState<CareerFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedMailto, setSubmittedMailto] = useState<string | null>(null);
  const [submitFailure, setSubmitFailure] = useState<string | null>(null);

  const handleSelectRole = (roleTitle: string) => {
    setForm((prev) => ({ ...prev, role: roleTitle }));
    document.getElementById('careers-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const validate = (state: CareerFormState): CareerFormErrors => {
    const next: CareerFormErrors = {};
    if (!state.name.trim()) next.name = 'Please enter your full name.';
    if (!state.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!state.phone.trim()) {
      next.phone = 'Please enter your phone number.';
    } else if (!/^[+\d\s()-]{7,20}$/.test(state.phone.trim())) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (!state.city.trim()) next.city = 'Please enter your current city.';
    if (!state.profileNote.trim()) {
      next.profileNote = 'Please include your LinkedIn URL or brief experience summary.';
    }
    if (!state.consent) {
      next.consent = 'Please confirm consent so our partners can review your application.';
    }
    return next;
  };

  const buildMailtoUrl = (state: CareerFormState) => {
    const subject = encodeURIComponent(
      `Career Application: ${state.role} — ${state.name.trim()}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${state.name.trim()}`,
        `Email: ${state.email.trim()}`,
        `Phone: ${state.phone.trim()}`,
        `Current City: ${state.city.trim()}`,
        `Qualification: ${state.qualification}`,
        `Role / Track: ${state.role}`,
        '',
        'LinkedIn / Experience Summary:',
        state.profileNote.trim(),
      ].join('\n')
    );
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
    const endpoint = import.meta.env.VITE_CAREERS_ENDPOINT as string | undefined;

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
        if (!res.ok) throw new Error('Submission failed');
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
        `Unable to submit right now. Please send your CV directly to ${SITE_META.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        pill={CAREERS_CONTENT.pill}
        line1={CAREERS_CONTENT.line1}
        line2={CAREERS_CONTENT.line2}
        description={CAREERS_CONTENT.intro}
        ctaLabel="Apply to Join ArGo"
        ctaTo="#careers-form"
      />

      <main id="main-content">
        {/* Open Tracks */}
        <section
          id="open-tracks"
          aria-labelledby="open-tracks-heading"
          className="mt-8 rounded-card bg-surface px-4 py-12 sm:px-8 md:mt-12 md:rounded-panel md:px-12 md:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal className="text-center">
              <Pill>OPEN TRACKS</Pill>
              <h2
                id="open-tracks-heading"
                className="mx-auto mt-5 max-w-[24ch] text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
              >
                Explore Opportunities
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
              {CAREER_OPENINGS.map((role, idx) => (
                <Reveal key={role.id} delay={idx * 0.08}>
                  <div className="flex h-full flex-col justify-between rounded-card border border-hairline bg-bg p-6 transition-all duration-250 ease-argo hover:-translate-y-1.5 hover:shadow-card sm:p-7">
                    <h3 className="text-[1.1875rem] font-medium leading-[1.35] text-ink">
                      {role.title}
                    </h3>

                    <div className="mt-6 border-t border-hairline pt-5">
                      <button
                        type="button"
                        onClick={() => handleSelectRole(role.title)}
                        className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-accent px-5 text-[0.875rem] font-medium text-on-accent transition-colors hover:bg-accent-deep active:scale-[0.98]"
                      >
                        <span>Apply for this Track</span>
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 ease-argo group-hover:rotate-45"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section
          id="careers-form"
          aria-labelledby="careers-form-heading"
          className="mt-12 rounded-card bg-ink p-6 text-white sm:p-10 md:mt-16 md:rounded-panel lg:p-14"
        >
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="flex flex-col justify-between lg:col-span-5">
              <div>
                <Pill variant="on-dark">APPLY NOW</Pill>
                <h2
                  id="careers-form-heading"
                  className="mt-5 text-[clamp(2rem,3.4vw,3rem)] font-normal leading-[1.12] tracking-[-0.015em] text-[#F7F5F0]"
                >
                  Build Your Career With Us
                </h2>
                <p className="mt-4 max-w-[44ch] text-justify text-base leading-[1.65] text-white/80">
                  “{MISSION_VISION.mission.quote}”
                </p>

                <div className="mt-8 space-y-4 border-t border-white/15 pt-8">
                  <a
                    href={`mailto:${SITE_META.email}?subject=${encodeURIComponent('Career Application — ArGo')}`}
                    className="group flex min-h-[44px] items-center gap-3.5 text-white/90 transition-colors hover:text-accent"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                      <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="block text-[0.6875rem] uppercase tracking-[0.08em] text-white/60">
                        Recruitment Email
                      </span>
                      <span className="break-all text-[0.9375rem] font-medium">
                        {SITE_META.email}
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={SITE_META.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-white/15"
                >
                  <MessageCircle className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="rounded-card bg-white p-6 text-ink sm:p-8">
                <div aria-live="polite">
                  {submitSuccess ? (
                    <FormSuccessView
                      title="Application Prepared"
                      description={`Thank you, ${form.name.trim()}. Your application for`}
                      selectionHighlight={form.role}
                      recipientEmail={SITE_META.email}
                      mailtoUrl={submittedMailto}
                      resetLabel="Submit another application"
                      onReset={() => {
                        setForm(INITIAL_CAREER_FORM);
                        setSubmitSuccess(false);
                        setSubmittedMailto(null);
                      }}
                    />
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career-name"
                            className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                          >
                            Full Name <span aria-hidden="true">*</span>
                          </label>
                          <input
                            id="career-name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => {
                              setForm((p) => ({ ...p, name: e.target.value }));
                              if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                            }}
                            aria-invalid={Boolean(errors.name)}
                            placeholder="Your full name"
                            className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink"
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs font-medium text-red-700">{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="career-city"
                            className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                          >
                            Current City <span aria-hidden="true">*</span>
                          </label>
                          <input
                            id="career-city"
                            type="text"
                            required
                            value={form.city}
                            onChange={(e) => {
                              setForm((p) => ({ ...p, city: e.target.value }));
                              if (errors.city) setErrors((p) => ({ ...p, city: undefined }));
                            }}
                            aria-invalid={Boolean(errors.city)}
                            placeholder="City / Town"
                            className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink"
                          />
                          {errors.city && (
                            <p className="mt-1 text-xs font-medium text-red-700">{errors.city}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career-email"
                            className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                          >
                            Email <span aria-hidden="true">*</span>
                          </label>
                          <input
                            id="career-email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => {
                              setForm((p) => ({ ...p, email: e.target.value }));
                              if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                            }}
                            aria-invalid={Boolean(errors.email)}
                            placeholder="you@example.com"
                            className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink"
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs font-medium text-red-700">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="career-phone"
                            className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                          >
                            Phone <span aria-hidden="true">*</span>
                          </label>
                          <input
                            id="career-phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => {
                              setForm((p) => ({ ...p, phone: e.target.value }));
                              if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                            }}
                            aria-invalid={Boolean(errors.phone)}
                            placeholder="+91 98XXX XXXXX"
                            className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-xs font-medium text-red-700">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career-role"
                            className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                          >
                            Role / Track
                          </label>
                          <select
                            id="career-role"
                            value={form.role}
                            onChange={(e) =>
                              setForm((p) => ({ ...p, role: e.target.value }))
                            }
                            className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink"
                          >
                            {CAREER_OPENINGS.map((opening) => (
                              <option key={opening.id} value={opening.title}>
                                {opening.title}
                              </option>
                            ))}
                            <option value="General Talent Application">
                              General Talent Application
                            </option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="career-qualification"
                            className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                          >
                            Qualification
                          </label>
                          <select
                            id="career-qualification"
                            value={form.qualification}
                            onChange={(e) =>
                              setForm((p) => ({ ...p, qualification: e.target.value }))
                            }
                            className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-[0.9375rem] text-ink"
                          >
                            <option value="Qualified CA/CS/CMA">Qualified CA/CS/CMA</option>
                            <option value="Semi-qualified CA/CS/CMA">Semi-qualified CA/CS/CMA</option>
                            <option value="Graduate or Post-Graduate">Graduate or Post-Graduate</option>
                            <option value="Article/Intern">Article/Intern</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="career-profile"
                          className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                        >
                          LinkedIn URL / Experience Summary <span aria-hidden="true">*</span>
                        </label>
                        <textarea
                          id="career-profile"
                          rows={4}
                          required
                          value={form.profileNote}
                          onChange={(e) => {
                            setForm((p) => ({ ...p, profileNote: e.target.value }));
                            if (errors.profileNote) {
                              setErrors((p) => ({ ...p, profileNote: undefined }));
                            }
                          }}
                          aria-invalid={Boolean(errors.profileNote)}
                          placeholder="Share your LinkedIn profile link, areas of experience (audit, taxation, MIS, advisory) and notice period..."
                          className="w-full rounded-xl border border-hairline bg-surface p-4 text-[0.9375rem] text-ink"
                        />
                        {errors.profileNote && (
                          <p className="mt-1 text-xs font-medium text-red-700">
                            {errors.profileNote}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="flex cursor-pointer items-start gap-3">
                          <input
                            type="checkbox"
                            checked={form.consent}
                            onChange={(e) => {
                              setForm((p) => ({ ...p, consent: e.target.checked }));
                              if (errors.consent) setErrors((p) => ({ ...p, consent: undefined }));
                            }}
                            className="mt-0.5 h-5 w-5 shrink-0 rounded border-hairline accent-ink"
                          />
                          <span className="text-[0.8125rem] leading-[1.45] text-ink-soft">
                            I consent to {SITE_META.fullBrandName} reviewing my details for career opportunities.
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="mt-1 text-xs font-medium text-red-700">{errors.consent}</p>
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
                          className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-[0.9375rem] font-medium text-on-accent transition-colors hover:bg-accent-deep active:scale-[0.98] disabled:opacity-70 sm:w-auto"
                        >
                          <span>{isSubmitting ? 'Preparing Application...' : 'Submit Application'}</span>
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
      </main>
    </>
  );
}
