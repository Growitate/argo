import { useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
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
  profileNote: string;
}

const INITIAL_CAREER_FORM: CareerFormState = {
  name: '',
  email: '',
  phone: '',
  role: CAREER_OPENINGS[0]?.title ?? 'General Application',
  city: '',
  profileNote: '',
};

export function CareersPage() {
  const [form, setForm] = useState<CareerFormState>(INITIAL_CAREER_FORM);

  const handleSelectRole = (roleTitle: string) => {
    setForm((prev) => ({ ...prev, role: roleTitle }));
    document.getElementById('careers-form')?.scrollIntoView({ behavior: 'smooth' });
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
        `Role / Track: ${state.role}`,
        '',
        'LinkedIn / Experience Summary:',
        state.profileNote.trim(),
      ].join('\n')
    );
    return `mailto:${SITE_META.email}?subject=${subject}&body=${body}`;
  };

  const hasEnteredDetails = Boolean(
    form.name.trim() ||
      form.city.trim() ||
      form.email.trim() ||
      form.phone.trim() ||
      form.profileNote.trim()
  );
  const directMailtoUrl = hasEnteredDetails
    ? buildMailtoUrl(form)
    : `mailto:${SITE_META.email}?subject=${encodeURIComponent('Career Application — ArGo')}`;

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
          className="mt-6 rounded-card bg-surface px-4 py-10 sm:mt-8 sm:px-8 sm:py-12 md:mt-12 md:rounded-panel md:px-12 md:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal className="text-center">
              <Pill>OPEN TRACKS</Pill>
              <h2
                id="open-tracks-heading"
                className="mx-auto mt-5 max-w-[24ch] text-[clamp(1.75rem,3.6vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ink"
              >
                Explore Opportunities
              </h2>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:mt-12 lg:grid-cols-4">
              {CAREER_OPENINGS.map((role, idx) => (
                <Reveal key={role.id} delay={idx * 0.08}>
                  <div className="flex h-full flex-col justify-between rounded-card border border-hairline bg-bg p-5 transition-all duration-250 ease-argo hover:-translate-y-1.5 hover:shadow-card sm:p-7">
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
          className="mt-8 rounded-card bg-ink p-5 text-white sm:mt-12 sm:p-10 md:mt-16 md:rounded-panel lg:p-14"
        >
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="flex flex-col justify-between lg:col-span-5">
              <div>
                <Pill variant="on-dark">APPLY NOW</Pill>
                <h2
                  id="careers-form-heading"
                  className="mt-5 text-[clamp(1.75rem,3.4vw,3rem)] font-normal leading-[1.12] tracking-[-0.015em] text-[#F7F5F0]"
                >
                  Build Your Career With Us
                </h2>
                <p className="mt-4 max-w-[44ch] text-left text-[0.9375rem] leading-[1.65] text-white/80 sm:text-justify sm:text-base">
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
                    <div className="min-w-0 flex-1">
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
              <div className="rounded-card bg-white p-5 text-ink sm:p-8">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="career-name"
                        className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                      >
                        Full Name
                      </label>
                      <input
                        id="career-name"
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Your full name"
                        className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink sm:text-[0.9375rem]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="career-city"
                        className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                      >
                        Current City
                      </label>
                      <input
                        id="career-city"
                        type="text"
                        value={form.city}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, city: e.target.value }))
                        }
                        placeholder="City / Town"
                        className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink sm:text-[0.9375rem]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="career-email"
                        className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                      >
                        Email
                      </label>
                      <input
                        id="career-email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink sm:text-[0.9375rem]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="career-phone"
                        className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                      >
                        Phone
                      </label>
                      <input
                        id="career-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        placeholder="+91 98XXX XXXXX"
                        className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink sm:text-[0.9375rem]"
                      />
                    </div>
                  </div>

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
                      className="min-h-[46px] w-full rounded-xl border border-hairline bg-surface px-4 text-base text-ink sm:text-[0.9375rem]"
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
                      htmlFor="career-profile"
                      className="mb-1.5 block text-[0.8125rem] font-medium text-ink"
                    >
                      LinkedIn URL / Experience Summary
                    </label>
                    <textarea
                      id="career-profile"
                      rows={4}
                      value={form.profileNote}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, profileNote: e.target.value }))
                      }
                      placeholder="Share your LinkedIn profile link, areas of experience (audit, taxation, MIS, advisory) and notice period..."
                      className="w-full rounded-xl border border-hairline bg-surface p-4 text-base text-ink sm:text-[0.9375rem]"
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
      </main>
    </>
  );
}
