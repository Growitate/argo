import type { ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
  variant?: 'default' | 'on-accent' | 'on-dark';
  className?: string;
}

const VARIANT_CLASSES: Record<NonNullable<PillProps['variant']>, string> = {
  default: 'bg-bg text-ink border border-hairline',
  'on-accent': 'bg-bg/95 text-ink border border-ink/10',
  'on-dark': 'bg-white/10 text-white border border-white/20',
};

export function Pill({
  children,
  variant = 'default',
  className = '',
}: PillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-[14px] py-[6px] text-[0.6875rem] font-medium uppercase leading-none tracking-[0.08em] ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
