export type ServiceIconName =
  | 'Handshake'
  | 'BriefcaseBusiness'
  | 'PieChart'
  | 'Landmark'
  | 'BookOpenCheck'
  | 'FileSpreadsheet'
  | 'Calculator'
  | 'ShieldCheck';

export type SectorIconName =
  | 'Factory'
  | 'Building2'
  | 'ShoppingBag'
  | 'HeartPulse'
  | 'Zap'
  | 'TrendingUp'
  | 'Plane';

export type ToolBrandId =
  | 'sap'
  | 'zoho'
  | 'xero'
  | 'quickbooks'
  | 'tally'
  | 'ginesys'
  | 'gofrugal';

export interface HeroSlide {
  id: string;
  tabLabel: string;
  line1: string;
  line2: string;
  supporting: string;
  image: string;
  imageAlt: string;
}

export interface BentoItem {
  id: string;
  tag: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  variant: 'surface' | 'accent';
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: ServiceIconName;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
}

export interface SectorItem {
  id: string;
  title: string;
  icon: SectorIconName;
  image: string;
  imageAlt: string;
}

export interface ToolItem {
  id: ToolBrandId;
  name: string;
}

export interface CareerOpeningItem {
  id: string;
  title: string;
}

export interface StatItem {
  id: string;
  /** Set a real number (e.g. 12) when supplied by the client; null displays placeholderText */
  numericTarget: number | null;
  suffix: string;
  placeholderText?: string;
  label: string;
  isPlaceholder?: boolean;
}

export interface ClientLogoSlot {
  id: string;
  label: string;
  /** Optional SVG/image path once supplied by client */
  logoUrl?: string;
  isPlaceholder: boolean;
}

export interface PartnerItem {
  id: string;
  name: string;
  designation: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  bioParagraphs: string[];
  image: string;
  mobileImage?: string;
  imageAlt: string;
  imagePositionClass?: string;
  imageWrapperClass?: string;
  isPlaceholder?: boolean;
}

export interface LocationPin {
  id: string;
  type: 'primary-base' | 'metro-presence';
  label: string;
  cityPlaceholder: string;
  description: string;
  /** Percentage coordinates relative to the stylised India SVG viewBox (0-500 x 0-560) */
  x: number;
  y: number;
}

export const SITE_META = {
  legalName: 'A A G D & Associates LLP',
  brandName: 'ArGo',
  brandSubline: '',
  fullBrandName: 'ArGo',
  tagline: 'Local Roots. Global Standards.',
  storyClosingLine:
    'Rooted in emerging cities. Present where business happens. Delivering without boundaries.',
  email: 'argoassuranceadvisory@gmail.com',
  whatsappNumber: '9822049900',
  whatsappUrl: 'https://wa.me/919822049900',
  copyrightYear: 2026,
  heroCtaLabel: 'Book a Consultation',
  navCtaLabel: 'Contact Us',
};

export interface NavItem {
  id: string;
  label: string;
  to: string;
}

export const NAV_LINKS: NavItem[] = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'about', label: 'About Us', to: '/about' },
  { id: 'services', label: 'Services', to: '/services' },
  { id: 'careers', label: 'Careers', to: '/careers' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'assurance-advisory',
    tabLabel: 'Extended CFO Arm',
    line1: 'Your Trusted Partner',
    line2: 'for the CFO Office',
    supporting: '',
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=85',
    imageAlt:
      'Finance advisors and business leaders reviewing strategy around a warm timber boardroom table',
  },
  {
    id: 'cfo-solutions',
    tabLabel: 'End-to-end Solutions',
    line1: 'Integrated Solutions',
    line2: 'for the Finance Function',
    supporting: '',
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=85',
    imageAlt:
      'Chartered accountants analysing financial reports and spreadsheets across laptops at a wooden desk',
  },
  {
    id: 'tier2-metro',
    tabLabel: 'Beyond Boundaries',
    line1: 'Local Roots.',
    line2: 'Global Standards.',
    supporting: '',
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85',
    imageAlt:
      'Sunlit executive meeting room prepared for partner-led client discussions',
  },
];

export const BENTO_CARDS: BentoItem[] = [
  {
    id: 'who-we-are',
    tag: 'WHO WE ARE',
    title: '',
    href: '/about#about',
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    imageAlt:
      'Multidisciplinary finance consulting team collaborating around laptops on an advisory engagement',
    variant: 'surface',
  },
  {
    id: 'our-model',
    tag: 'VISION | MISSION',
    title: '',
    href: '/about#mission-vision',
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80',
    imageAlt:
      'Senior advisors reviewing growth and financial charts together in a client briefing',
    variant: 'accent',
  },
  {
    id: 'our-promise',
    tag: 'OUR SERVICES',
    title: '',
    href: '/services#services',
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80',
    imageAlt:
      'Finance professionals reviewing reporting workflows and internal control systems',
    variant: 'surface',
  },
];

export const BUSINESS_OVERVIEW = {
  aboutBusiness: {
    heading: 'Integrated Solutions Across the CFO Office',
    paragraphs: [
      'ArGo is a professional services and consulting firm providing integrated solutions across the CFO Office.',
      'We work with businesses to manage, strengthen and streamline their finance functions through a comprehensive range of services covering accounting, financial reporting, assurance, taxation, regulatory compliance, financial planning, MIS and business advisory.',
      'Our approach goes beyond traditional compliance and transaction-based services. We work as an extended partner to the CFO Office, combining technical expertise with practical business understanding to support financial governance, operational efficiency, informed decision-making and business growth.',
      'With our primary delivery capabilities based in Tier 2 cities and a presence in major business centres, we operate through a flexible model that brings together skilled talent, efficient execution and close client engagement.',
    ],
  },
  problemWeSolve: {
    heading: 'Turning Operational Complexity Into Control',
    paragraphs: [
      'Businesses often face challenges in managing complex financial operations, maintaining accurate financial records, meeting regulatory and compliance requirements, and establishing effective internal controls.',
      'At ArGo, we simplify these complexities through practical, reliable and customised solutions across accounting, finance, taxation, assurance and advisory.',
      'We help businesses strengthen their financial processes, enhance transparency, improve operational efficiency and make informed business decisions, allowing management to focus on their core business and growth.',
    ],
  },
};

export const SERVICES_HEADER = {
  heading: 'One Partner. Multiple Solutions',
  subheading:
    'We go beyond conventional finance support, working alongside your CFO Office to translate technical expertise and business understanding into effective financial and operational outcomes.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'fund-raising-refinancing',
    title: 'Fund Raising / Refinancing',
    icon: 'Landmark',
    shortDescription:
      'Debt and equity readiness, lender documentation, financial models.',
    fullDescription:
      'End-to-end financial readiness for growing enterprises raising working capital, project debt or growth equity. We prepare bank-grade financial models and structured disclosures that withstand lender and investor scrutiny.',
    deliverables: [
      'Debt and equity capital readiness assessment',
      'Three-statement financial models and sensitivity cases',
      'Information memoranda and lender documentation',
      'CMA data preparation and post-sanction reporting support',
    ],
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85',
    imageAlt:
      'Modern financial district towers representing corporate capital and refinancing advisory',
  },
  {
    id: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    icon: 'BriefcaseBusiness',
    shortDescription:
      'M&A strategy, buy/sell-side advisory, financial due diligence, valuation and post-merger integration.',
    fullDescription:
      'We provide strategic and financial support across the M&A lifecycle, assisting businesses, promoters and investors in evaluating, structuring and executing transactions. From assessing potential opportunities and analysing financial performance to transaction structuring, due diligence and post-deal integration, we help stakeholders navigate complex transactions with informed decision-making, financial clarity and a focus on value creation.',
    deliverables: [
      'M&A strategy and transaction advisory',
      'Buy-side and sell-side advisory support',
      'Financial due diligence and transaction analysis',
      'Business valuation and deal structuring',
      'Financial modelling and deal evaluation',
      'Negotiation and transaction support',
      'Post-merger integration and financial restructuring',
    ],
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85',
    imageAlt:
      'Advisory partners and executives collaborating on mergers and acquisitions deal strategy',
  },
  {
    id: 'handover-takeover',
    title: 'Handover/Takeover',
    icon: 'Handshake',
    shortDescription:
      'Financial & tax due diligence, valuation support, data transfer and MIS integration.',
    fullDescription:
      'Structured transaction support for buyers, promoters and management teams evaluating acquisitions or strategic investments. We help leadership assess financial quality, surface control gaps early and integrate post-close reporting cleanly.',
    deliverables: [
      'Financial & tax due diligence',
      'Valuation support',
      'Data transfer',
      'Post-acquisition integration of accounting and MIS',
    ],
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85',
    imageAlt:
      'Executives shaking hands following a corporate acquisition advisory review',
  },
  {
    id: 'annual-budgeting',
    title: 'Annual Budgeting',
    icon: 'PieChart',
    shortDescription:
      'Budget frameworks, forecasting, variance review, MIS dashboards.',
    fullDescription:
      'Practical financial planning and annual budgeting designed around operational drivers rather than static spreadsheets. We establish disciplined forecasting rhythms and clear MIS reporting so leadership can act early on performance shifts.',
    deliverables: [
      'Annual operating and capital budget frameworks',
      'Rolling cash-flow and working-capital forecasting',
      'Monthly budget-vs-actual variance reviews',
      'Management Information System (MIS) dashboards',
    ],
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
    imageAlt:
      'Financial planning and MIS performance charts displayed on an executive laptop',
  },
  {
    id: 'accounting-accounts-payable',
    title: 'Accounting & Accounts Payable',
    icon: 'BookOpenCheck',
    shortDescription:
      'Transaction processing, P2P management, vendor invoicing and monthly book closures.',
    fullDescription:
      'Structured accounting and accounts payable solutions that bring discipline, accuracy and control to day-to-day financial operations. We manage the accounting lifecycle from transaction processing and ledger scrutiny to vendor invoice management and payment coordination, enabling businesses to maintain reliable financial records, strengthen process controls and achieve timely book closures.',
    deliverables: [
      'Day-to-day accounting and transaction processing, including journal, payment and receipt entries',
      'Vendor invoice processing, verification and accounting, End-to-end Procure-to-Pay (P2P) process management',
      'Monthly book closure, including provisions, accruals and adjustment entries',
      'Maintenance of accounting records and audit-ready documentation',
    ],
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85',
    imageAlt:
      'Chartered accountants analysing financial reports and ledgers at a desk',
  },
  {
    id: 'financial-reporting-audit',
    title: 'Financial Reporting & Audit',
    icon: 'FileSpreadsheet',
    shortDescription:
      'Statutory reporting, assurance engagements, internal controls and audit readiness.',
    fullDescription:
      'Dependable financial governance anchored in accurate books, defensible accounting policies and effective internal controls. We help finance teams close on schedule, meet statutory requirements and maintain audit-ready records year-round.',
    deliverables: [
      'Financial statement preparation and statutory reporting',
      'Assurance engagements and audit-readiness support',
      'Internal financial controls design and process reviews',
    ],
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?auto=format&fit=crop&w=900&q=85',
    imageAlt:
      'Financial charts, analytical reports, notebook and laptop on an audit desk',
  },
  {
    id: 'taxation-direct-indirect',
    title: 'Taxation (Direct & Indirect Tax)',
    icon: 'Calculator',
    shortDescription:
      'Income tax, GST compliance, representation in assessments and tax advisory.',
    fullDescription:
      'Comprehensive tax solutions designed to ensure regulatory compliance, optimise tax positions and minimise exposure to tax risks. We support businesses across the entire tax lifecycle, combining technical knowledge with practical insights to manage compliance, reporting, assessments and tax-related matters effectively.',
    deliverables: [
      'Advance tax computations, TDS/TCS compliance, Income Tax return filing, Tax Audits, Transfer Pricing Audit',
      'GST registration, periodic return filing, reconciliations and audits',
      'Representation and support in Income Tax and GST notices, audits and assessments',
      'Tax planning and advisory on business transactions and restructuring',
    ],
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85',
    imageAlt:
      'Tax return forms, calculator and statutory compliance schedules',
  },
  {
    id: 'certifications-attestations',
    title: 'Certifications & Attestations',
    icon: 'ShieldCheck',
    shortDescription:
      'Statutory, regulatory, bank and special-purpose certifications and attestations.',
    fullDescription:
      'Reliable certification and attestation services backed by technical rigor, independent professional assessment and a thorough understanding of applicable regulatory requirements. We assist businesses in meeting statutory, regulatory and stakeholder-specific certification requirements.',
    deliverables: [
      'Statutory and regulatory certifications under applicable laws and regulations',
      'Certifications for banks, financial institutions and other stakeholders',
      'Special-purpose certifications as agreed-upon procedures engagements',
    ],
    // REPLACE with client photography
    image:
      'https://images.unsplash.com/photo-1709318158189-9916f0d392d1?auto=format&fit=crop&w=900&q=85',
    imageAlt:
      'Partner reviewing and signing a stamped statutory certification document',
  },
];

export const SECTORS: SectorItem[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: 'Factory',
    image:
      'https://images.unsplash.com/photo-1566930665082-4ae9dbbb5b6b?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Industrial manufacturing assembly floor and production facility',
  },
  {
    id: 'real-estate-infrastructure',
    title: 'Real Estate & Infrastructure',
    icon: 'Building2',
    image:
      'https://images.unsplash.com/photo-1595006986810-5f41da30a9ec?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Modern commercial skyscrapers and urban infrastructure skyline',
  },
  {
    id: 'consumer-distribution',
    title: 'Consumer & Distribution',
    icon: 'ShoppingBag',
    image:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Retail point-of-sale counter serving consumer customers',
  },
  {
    id: 'pharmaceuticals-healthcare',
    title: 'Pharmaceuticals & Healthcare',
    icon: 'HeartPulse',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Pharmaceutical laboratory glassware and research environment',
  },
  {
    id: 'energy-renewables',
    title: 'Energy & Renewables',
    icon: 'Zap',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Rows of solar photovoltaic panels generating clean renewable energy',
  },
  {
    id: 'trading-commodities',
    title: 'Trading & Commodities',
    icon: 'TrendingUp',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Organised distribution warehouse inventory and trading logistics',
  },
  {
    id: 'aviation',
    title: 'Aviation',
    icon: 'Plane',
    image:
      'https://images.unsplash.com/photo-1572204443441-3859041b6c88?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Commercial aircraft wing viewed above clouds during flight',
  },
];

export const HANDS_ON_TOOLS: ToolItem[] = [
  { id: 'sap', name: 'SAP' },
  { id: 'zoho', name: 'ZOHO' },
  { id: 'xero', name: 'Xero' },
  { id: 'quickbooks', name: 'QuickBooks' },
  { id: 'tally', name: 'Tally' },
  { id: 'ginesys', name: 'Ginesys' },
  { id: 'gofrugal', name: 'GoFrugal' },
];

export const CAREER_OPENINGS: CareerOpeningItem[] = [
  { id: 'qualified-ca-cs-cma', title: 'Qualified CA/CS/CMA' },
  { id: 'semi-qualified-ca-cs-cma', title: 'Semi-qualified CA/CS/CMA' },
  { id: 'graduate-post-graduate', title: 'Graduate or Post-Graduate' },
  { id: 'article-intern', title: 'Article/Intern' },
];

export const CAREERS_CONTENT = {
  pill: 'CAREERS',
  line1: 'Talent Has No Geography.',
  line2: 'Neither Should Opportunity.',
  intro:
    'We are building a workplace where location does not limit ambition. At ArGo, professionals from emerging cities get exposure to complex assignments, diverse industries and high-impact work, without having to compromise on where they choose to live.',
};

export const STATS: StatItem[] = [
  {
    id: 'experience-years',
    numericTarget: 10,
    suffix: '+',
    label: 'Years of Experience',
    isPlaceholder: false,
  },
  {
    id: 'clients-served',
    numericTarget: 50,
    suffix: '+',
    label: 'Clients Served',
    isPlaceholder: false,
  },
  {
    id: 'industry-exposure',
    numericTarget: 7,
    suffix: '+',
    label: 'Industry Exposure',
    isPlaceholder: false,
  },
  {
    id: 'domains-expertise',
    numericTarget: 8,
    suffix: '+',
    label: 'Domains of Expertise',
    isPlaceholder: false,
  },
];

// PLACEHOLDER CONSTANTS: swap in verified client logo SVGs/PNGs when supplied by the client.
export const CLIENT_LOGOS: ClientLogoSlot[] = [
  { id: 'client-1', label: 'Client Logo 01', isPlaceholder: true },
  { id: 'client-2', label: 'Client Logo 02', isPlaceholder: true },
  { id: 'client-3', label: 'Client Logo 03', isPlaceholder: true },
  { id: 'client-4', label: 'Client Logo 04', isPlaceholder: true },
  { id: 'client-5', label: 'Client Logo 05', isPlaceholder: true },
  { id: 'client-6', label: 'Client Logo 06', isPlaceholder: true },
];

export const ABOUT_CONTENT = {
  pill: 'ABOUT US',
  heading: 'Our Story',
  paragraphs: [
    'ArGo was born from a simple observation and a larger ambition. Having spent several years working in Mumbai, we experienced first-hand the professional exposure and opportunities that metropolitan cities offer. We also recognised the untapped potential of talent in Tier 2 cities, where access to comparable professional opportunities is often limited.',
    'We saw an opportunity to bridge this gap by building a professional services firm that brings quality work and meaningful career opportunities closer to home. Our vision was to establish our primary operational and delivery base in a Tier 2 city, while extending our presence to major business centres through a team positioned closer to our clients.',
    'This approach allows us to combine the advantages of a strong talent base in emerging cities with the accessibility, responsiveness and client proximity of a metropolitan presence. At ArGo, we believe that great talent is not confined by geography, and quality professional services need not be delivered exclusively from metropolitan centres. Our operating model reflects this belief — creating opportunities where talent exists, while serving businesses wherever they operate.',
  ],
  image: '/WhatsApp%20Image%202026-11-26%20at%2010.50.09%20AM.jpeg',
  imageAlt:
    'Two finance advisors collaborating over a laptop in a modern office meeting room',
};

export const WHY_ARGO_CONTENT = {
  heading: 'Why Choose ArGo',
  intro:
    'At ArGo, we believe that effective professional services go beyond technical knowledge — they require a thorough understanding of business needs, practical insights and a commitment to delivering meaningful outcomes.',
  items: [
    {
      id: 'depth-of-expertise',
      title: 'Depth of Expertise',
      description:
        'Strong technical capabilities across accounting, financial reporting, assurance, taxation, regulatory compliance and MIS — combined with hands-on professional experience.',
    },
    {
      id: 'business-perspective',
      title: 'Business Perspective',
      description:
        'We work closely with clients to understand their business, identify areas of improvement and develop solutions that are practical, commercially relevant and aligned with their objectives.',
    },
    {
      id: 'partner-led-attention',
      title: 'Partner-Led Attention',
      description:
        'With direct partner involvement, personalised attention and a multidisciplinary service offering, we bring together the expertise required to address diverse business requirements.',
    },
  ],
};

export const MISSION_VISION = {
  mission: {
    label: 'MISSION',
    quote:
      'To deliver high-quality, reliable and value-driven professional services across geographies through a flexible, client-centric operating model, while creating meaningful professional opportunities and nurturing talent in emerging cities.',
  },
  vision: {
    label: 'VISION',
    quote:
      'To build a geographically diverse and respected professional services firm that connects talent from emerging cities with businesses and opportunities across major markets, demonstrating that excellence in professional services is not defined by location.',
  },
};

export const PARTNERS: PartnerItem[] = [
  {
    id: 'ca-arpit-agrawal',
    name: 'Arpit Agrawal',
    designation: 'Partner | Chartered Accountant | CFA (USA) – All Levels Cleared',
    phoneDisplay: '+91 85510 50560',
    phoneHref: 'tel:+918551050560',
    whatsappHref: 'https://wa.me/919822049900',
    email: 'argoassuranceadvisory@gmail.com',
    bioParagraphs: [
      'Arpit brings over 7 years of post-qualification experience spanning financial reporting, assurance, taxation, regulatory compliance and business advisory. His professional journey across diverse business environments has provided him with a well-rounded understanding of financial management, business operations and regulatory frameworks.',
      'He began his professional journey with the Sanjay Ghodawat Group, where he spent three years gaining exposure to diverse business sectors, including FMCG, retail, real estate, aviation and energy. This experience helped him develop a broad understanding of the financial and operational dynamics of businesses across industries.',
      'He subsequently spent over four years with Vertis Infrastructure Trust (A KKR backed platform), where he developed extensive experience in financial reporting, audit and assurance, taxation and regulatory matters. His work encompassed financial reporting, handling audits with Big Four firms, direct and indirect tax compliance and assessments, financial and tax modelling, and SEBI-related matters, including inspections.',
      'At ArGo, Arpit brings together his experience across diverse industries and complex financial environments to help businesses strengthen financial governance, enhance reporting quality, manage regulatory requirements and establish robust financial processes. He believes in combining technical rigour with practical business understanding to deliver meaningful outcomes for clients.',
    ],
    image: '/images/WhatsApp%20Image%202026-11-25%20at%209.11.50%20AM.jpeg',
    imageAlt: 'Portrait of Arpit Agrawal, Partner at ArGo',
    isPlaceholder: false,
  },
  {
    id: 'ca-gopesh-dawda',
    name: 'Gopesh Dawda',
    designation: 'Partner | Chartered Accountant | CFA (USA) – All Levels Cleared',
    phoneDisplay: '+91 98220 49900',
    phoneHref: 'tel:+919822049900',
    whatsappHref: 'https://wa.me/919822049900',
    email: 'argoassuranceadvisory@gmail.com',
    bioParagraphs: [
      'Gopesh brings a blend of financial management, strategic planning and technology-driven process understanding. With over 5 years of post-qualification experience, he has developed a strong understanding of how finance functions operate, support business strategy and contribute to organizational growth.',
      'His professional experience spans financial planning and budgeting, treasury management, business valuations, debt fundraising and management reporting. Having worked across both enterprise technology implementation and complex financial management environments, he brings a perspective that connects financial strategy with operational execution.',
      'His association with Accenture in an SAP implementation role provided him with an understanding of enterprise systems, business processes and the role of technology in transforming finance functions. This was complemented by his experience at Vertis Infrastructure Trust (A KKR backed platform), where he gained a deeper understanding of financial strategy and management, particularly in areas such as business valuations, treasury, debt raising, annual operating plans and financial reporting.',
      'At ArGo, Gopesh brings this combination of financial and technological understanding to help businesses build stronger finance functions, improve financial visibility and make informed business decisions. He is particularly focused on bridging the gap between financial information, business strategy and effective execution.',
    ],
    image: '/Gopesh%20Dawda%20Profile%20pic%20(1).png',
    imageAlt: 'Portrait of Gopesh Dawda, Partner at ArGo',
    imagePositionClass: 'object-center',
    isPlaceholder: false,
  },
];

// PLACEHOLDER CONSTANTS: replace cityPlaceholder names with exact Tier 2 and Metro offices from client PPT.
export const LOCATIONS: LocationPin[] = [
  {
    id: 'tier-2-base',
    type: 'primary-base',
    label: 'Primary Delivery Base',
    cityPlaceholder: 'Tier 2 Delivery Hub [City Placeholder]',
    description:
      'Primary operational and delivery centre nurturing skilled Chartered Accountancy and finance talent in an emerging city.',
    x: 215,
    y: 265,
  },
  {
    id: 'mumbai-metro',
    type: 'metro-presence',
    label: 'Metro Client Presence',
    cityPlaceholder: 'Mumbai & Western Corridor [Office Placeholder]',
    description:
      'Client-facing presence grounded in years of Mumbai metropolitan practice for close engagement and responsiveness.',
    x: 132,
    y: 332,
  },
  {
    id: 'major-business-centres',
    type: 'metro-presence',
    label: 'Major Business Centres',
    cityPlaceholder: 'Major Business Centres [Cities Placeholder]',
    description:
      'Flexible client engagement teams positioned closer to businesses across India’s commercial hubs.',
    x: 196,
    y: 162,
  },
];

export const CONTACT_CONTENT = {
  pill: 'CONTACT US',
  firmName: 'A A G D & Associates LLP',
  addressLabel: 'Address:',
  addresses: [
    'M-6, First Floor, Opp. Post Office, Shahu Market Yard, Kolhapur – 416005, Maharashtra',
    'Innov8 House, Gufic Building, Vile Parle (E), Subhash Road, Mumbai – 400057, Maharashtra',
  ],
  serviceOptions: [
    'Fund Raising / Refinancing',
    'Mergers & Acquisitions',
    'Handover/Takeover',
    'Annual Budgeting',
    'Accounting & Accounts Payable',
    'Financial Reporting & Audit',
    'Taxation (Direct & Indirect Tax)',
    'Certifications & Attestations',
    'Other',
  ],
};
