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
      className="mt-12 rounded-t-[24px] bg-ink px-6 pb-8 pt-10 text-white sm:px-10 md:mt-16 md:rounded-t-panel lg:mt-20 lg:px-14 lg:pt-12"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand logo */}
          <Link to="/" aria-label="ArGo Home" className="w-fit shrink-0">
            <LogoMark tone="light" />
          </Link>

          {/* Horizontal navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[0.875rem] lg:gap-x-8">
              {FOOTER_PAGE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-[36px] items-center text-white/85 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom legal bar */}
        <div className="pt-6 text-[0.8125rem] text-white/65">
          <p>
            © {SITE_META.copyrightYear} {SITE_META.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
