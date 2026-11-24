import { SITE_META } from '../data/siteData';

interface LogoMarkProps {
  tone?: 'light' | 'dark';
}

export function LogoMark({ tone: _tone = 'light' }: LogoMarkProps) {
  return (
    <span className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-[1.125rem] font-semibold tracking-[-0.02em] leading-none text-on-accent shadow-sm">
      {SITE_META.brandName}
    </span>
  );
}
