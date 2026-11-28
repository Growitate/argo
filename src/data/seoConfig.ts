export const SITE_URL = 'https://argoglobaladvisors.com';

export const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85';

export interface RouteSeoMeta {
  title: string;
  ogTitle: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}

export const GLOBAL_SEO_KEYWORDS = [
  'ArGo',
  'ArGo Assurance & Advisory',
  'ArGo Advisors',
  'ArGo Advisory',
  'ArGo Assurance',
  'AAGD & Associates LLP',
  'AAGD',
  'CA Arpit Agrawal',
  'Arpit',
  'CA Gopesh Dawda',
  'Gopesh',
  'Chartered Accountant',
  'Leading CA firm',
  'CA firm Mumbai',
  'Chartered Accountants in Mumbai',
  'Leading advisor in finance and accounts',
  'Leading firm in infrastructure',
  'Leading firm in tax',
  'Accounting',
  'Finance',
  'Finance Services',
  'Audit tax',
  'Tax planning',
  'Merger',
  'Mergers & Acquisitions',
  'Transaction advisory',
  'Advisor',
].join(', ');

export const ROUTE_SEO: Record<string, RouteSeoMeta> = {
  '/': {
    title: 'ArGo | Home',
    ogTitle:
      'ArGo Assurance & Advisory (AAGD & Associates LLP) | Chartered Accountants in Mumbai',
    description:
      'ArGo Assurance & Advisory (A A G D & Associates LLP) is a leading CA firm in Mumbai led by Chartered Accountants CA Arpit Agrawal and CA Gopesh Dawda — providing accounting, finance services, audit & tax planning, mergers, transaction advisory, and infrastructure finance solutions.',
    keywords: GLOBAL_SEO_KEYWORDS,
    canonicalPath: '/',
  },
  '/about': {
    title: 'ArGo | About Us',
    ogTitle:
      'About ArGo Advisors (AAGD & Associates LLP) | CA Arpit Agrawal & CA Gopesh Dawda',
    description:
      'Meet CA Arpit Agrawal and CA Gopesh Dawda, Chartered Accountants leading ArGo Assurance & Advisory (AAGD & Associates LLP) — a trusted CA firm in Mumbai and Kolhapur delivering partner-led finance, accounts, audit, tax, and infrastructure advisory.',
    keywords:
      'ArGo, ArGo Assurance & Advisory, ArGo Advisors, ArGo Advisory, ArGo Assurance, AAGD & Associates LLP, AAGD, Arpit, CA Arpit Agrawal, Gopesh, CA Gopesh Dawda, Chartered Accountant, Chartered Accountants in Mumbai, CA firm Mumbai, Leading CA firm, Leading advisor in finance and accounts',
    canonicalPath: '/about',
  },
  '/services': {
    title: 'ArGo | Services',
    ogTitle:
      'Finance, Accounting, Audit, Tax Planning, M&A & Infrastructure Advisory | ArGo Advisors',
    description:
      'Explore CFO office and Chartered Accountancy services from ArGo Advisory (AAGD & Associates LLP): fund raising, mergers & transaction advisory, accounting, financial reporting, audit & tax planning, and infrastructure finance services across Mumbai and India.',
    keywords:
      'ArGo Advisory, ArGo Assurance, Accounting, Finance, Finance Services, Audit tax, Tax planning, Merger, Transaction advisory, Advisor, Leading advisor in finance and accounts, Leading firm in infrastructure, Leading firm in tax, CA firm Mumbai, Chartered Accountants in Mumbai, AAGD & Associates LLP',
    canonicalPath: '/services',
  },
  '/careers': {
    title: 'ArGo | Careers',
    ogTitle:
      'Careers for Chartered Accountants & Finance Professionals | ArGo (AAGD & Associates LLP)',
    description:
      'Build your career in accounting, audit, tax planning, and finance advisory with ArGo Assurance & Advisory (AAGD & Associates LLP). Open tracks for Chartered Accountants, CS, CMA, graduates, and articles across emerging cities and Mumbai.',
    keywords:
      'ArGo, ArGo Advisors, AAGD & Associates LLP, AAGD, Chartered Accountant careers, CA firm Mumbai, Accounting, Finance Services, Audit tax, Transaction advisory',
    canonicalPath: '/careers',
  },
  '/contact': {
    title: 'ArGo | Contact Us',
    ogTitle:
      'Contact ArGo Assurance & Advisory (AAGD & Associates LLP) | Mumbai & Kolhapur CA Firm',
    description:
      'Connect with Chartered Accountants CA Arpit Agrawal and CA Gopesh Dawda at ArGo Assurance & Advisory (A A G D & Associates LLP) in Vile Parle, Mumbai and Kolhapur for accounting, audit & tax planning, mergers, and transaction advisory.',
    keywords:
      'Contact ArGo, ArGo Assurance & Advisory, ArGo Advisors, AAGD & Associates LLP, AAGD, CA firm Mumbai, Chartered Accountants in Mumbai, Arpit, Gopesh, Chartered Accountant, Finance Services, Tax planning, Transaction advisory',
    canonicalPath: '/contact',
  },
};
