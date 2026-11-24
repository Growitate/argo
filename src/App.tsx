import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Footer } from './components/Footer';
import { ScrollManager } from './components/ScrollManager';
import { SITE_META } from './data/siteData';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const CareersPage = lazy(() =>
  import('./pages/CareersPage').then((m) => ({ default: m.CareersPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);

export function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

      <div className="min-h-screen bg-bg text-ink">
        {/* Skip-to-content link for keyboard & screen-reader navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-on-accent"
        >
          Skip to main content
        </a>

        {/* Outer page frame: 12px mobile / 20px desktop gutter */}
        <div className="mx-auto max-w-[1440px] px-3 pt-3 lg:px-5 lg:pt-5">
          <Suspense fallback={<div className="min-h-[70vh]" aria-busy="true" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>

          <Footer />
        </div>

        {/* Persistent 56px lime WhatsApp FAB */}
        <a
          href={SITE_META.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message ArGo on WhatsApp"
          title="WhatsApp: +91 98220 49900"
          className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-on-accent shadow-card transition-all duration-200 ease-argo hover:-translate-y-0.5 hover:bg-accent-deep active:scale-[0.98]"
        >
          <MessageCircle className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
