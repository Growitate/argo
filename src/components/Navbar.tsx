import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE_META } from '../data/siteData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { LogoMark } from './LogoMark';
import { ARGO_EASE } from './Reveal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterReached, setIsFooterReached] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const footer = document.getElementById('site-footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        // Hide sticky ribbon once the footer meaningfully enters the viewport
        const visibleHeight = window.innerHeight - rect.top;
        setIsFooterReached(visibleHeight >= Math.min(rect.height * 0.45, 96));
      } else {
        setIsFooterReached(false);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Body scroll lock, ESC key & focus trap for mobile navigation drawer
  useEffect(() => {
    if (!mobileOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 30);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
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
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [mobileOpen]);

  const isNavItemActive = (_id: string, to: string) => pathname === to;

  const showScrolledNav = isScrolled && !isFooterReached;

  const navClasses = isScrolled
    ? `fixed top-3 left-3 right-3 lg:top-4 lg:left-5 lg:right-5 mx-auto max-w-[1400px] rounded-full bg-white/80 backdrop-blur-[16px] border border-hairline shadow-card px-4 py-2 lg:px-6 lg:py-2.5 z-50 transition-all duration-300 ease-argo ${
        isFooterReached
          ? 'invisible pointer-events-none -translate-y-6 opacity-0'
          : 'visible translate-y-0 opacity-100'
      }`
    : 'absolute top-4 left-4 right-4 lg:top-5 lg:left-8 lg:right-8 z-50';

  return (
    <>
      <header className="contents">
        <motion.nav
          aria-label="Primary navigation"
          aria-hidden={isScrolled && isFooterReached ? true : undefined}
          initial={false}
          animate={{ y: 0, opacity: isScrolled && isFooterReached ? 0 : 1 }}
          key={isScrolled ? 'nav-fixed' : 'nav-hero'}
          transition={{
            duration: prefersReducedMotion ? 0.15 : 0.3,
            ease: ARGO_EASE,
          }}
          className={navClasses}
        >
          <motion.div
            initial={
              showScrolledNav && !prefersReducedMotion
                ? { y: -24, opacity: 0 }
                : false
            }
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.15 : 0.35,
              ease: ARGO_EASE,
            }}
            className="flex items-center justify-between gap-4"
          >
            {/* Brand logo */}
            <Link
              to="/"
              aria-label="ArGo Home"
              tabIndex={isScrolled && isFooterReached ? -1 : undefined}
              className="rounded-full py-1 pr-2 transition-opacity hover:opacity-90"
            >
              <LogoMark tone={isScrolled ? 'dark' : 'light'} />
            </Link>

            {/* Centre desktop links */}
            <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = isNavItemActive(link.id, link.to);
                return (
                  <li key={link.id}>
                    <Link
                      to={link.to}
                      className={`relative inline-flex min-h-[44px] items-center text-[0.75rem] font-medium transition-all duration-200 ease-argo hover:-translate-y-[1px] xl:text-[0.8125rem] ${
                        isScrolled
                          ? isActive
                            ? 'text-ink'
                            : 'text-ink/80 hover:text-ink'
                          : isActive
                            ? 'text-white'
                            : 'text-white/85 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-2 left-0 right-0 h-[2px] rounded-full bg-accent"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <a
                href={SITE_META.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message ArGo on WhatsApp"
                title="WhatsApp (+91 98220 49900)"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E9E7E3] text-ink transition-all duration-200 ease-argo hover:bg-surface-2 active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </a>

              <Link
                to="/contact"
                aria-current={pathname === '/contact' ? 'page' : undefined}
                className="group hidden h-11 items-center gap-1.5 rounded-full bg-accent px-[22px] text-[0.8125rem] font-medium text-on-accent transition-all duration-200 ease-argo hover:bg-accent-deep active:scale-[0.98] sm:inline-flex"
              >
                <span>{SITE_META.navCtaLabel}</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 ease-argo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Link>

              <button
                ref={menuButtonRef}
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-drawer"
                onClick={() => setMobileOpen(true)}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                  isScrolled
                    ? 'bg-surface text-ink hover:bg-surface-2'
                    : 'bg-white/20 text-white backdrop-blur-md hover:bg-white/30'
                }`}
              >
                <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </motion.nav>
      </header>

      {/* Mobile navigation sheet (<1024px) */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.15 : 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-ink/50 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              id="mobile-nav-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: prefersReducedMotion ? 0 : '100%', opacity: prefersReducedMotion ? 0 : 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: prefersReducedMotion ? 0 : '100%', opacity: prefersReducedMotion ? 0 : 1 }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.38, ease: ARGO_EASE }}
              className="fixed right-0 top-0 flex h-full w-[88%] max-w-sm flex-col justify-between overflow-y-auto bg-ink p-6 text-white shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <LogoMark tone="light" />
                  <button
                    ref={closeButtonRef}
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>

                <ul className="mt-8 space-y-2">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = isNavItemActive(link.id, link.to);
                    return (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: prefersReducedMotion ? 0.15 : 0.35,
                          delay: prefersReducedMotion ? 0 : 0.06 * index,
                          ease: ARGO_EASE,
                        }}
                      >
                        <Link
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className={`flex min-h-[48px] items-center justify-between rounded-2xl px-4 py-3 text-lg font-normal transition-colors ${
                            isActive
                              ? 'bg-white/10 text-accent'
                              : 'text-white/90 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span>{link.label}</span>
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-[0.9375rem] font-medium text-on-accent transition-colors hover:bg-accent-deep"
                >
                  <span>{SITE_META.navCtaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </Link>
                <a
                  href={SITE_META.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
                <p className="pt-2 text-center text-xs text-white/60">
                  {SITE_META.legalName}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
