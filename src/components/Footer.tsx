import { Link } from 'react-router-dom';
import { SITE_META } from '../data/siteData';
import { LogoMark } from './LogoMark';

const FOOTER_PAGE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us & Story', to: '/about' },
  { label: 'Partners', to: '/about#partners' },
  { label: 'Services & Sectors', to: '/services' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
];

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="mt-6 rounded-card bg-ink px-5 py-5 text-white sm:px-8 sm:py-6 md:mt-8 md:rounded-panel lg:mt-10 lg:px-12 lg:py-6"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4 border-b border-white/15 pb-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand logo */}
          <Link to="/" aria-label="ArGo Home" className="w-fit shrink-0">
            <LogoMark tone="light" size="md" />
          </Link>

          {/* Horizontal navigation */}
          <nav aria-label="Footer navigation">
            <ul
              style={{ gap: '0.5rem 1.5rem' }}
              className="flex flex-wrap items-center gap-4 text-[0.875rem] sm:gap-6 lg:gap-8"
            >
              {FOOTER_PAGE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-[36px] items-center whitespace-nowrap py-1 text-white/85 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom legal bar */}
        <div className="flex flex-col gap-1.5 pt-4 pr-14 text-[0.8125rem] leading-relaxed text-white/65 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pr-16 xl:pr-0">
          <p>
            © {SITE_META.copyrightYear} {SITE_META.legalName} (ArGo Assurance &amp; Advisory) · Mumbai &amp; Kolhapur. All rights reserved.
          </p>
          <p className="text-white/70">
            Built by{' '}
            <a
              href="https://growitate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-opacity hover:underline hover:opacity-90"
            >
              Growitate
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
