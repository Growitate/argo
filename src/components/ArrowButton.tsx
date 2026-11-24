import { ArrowUpRight } from 'lucide-react';

interface ArrowButtonProps {
  variant?: 'surface' | 'accent' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  as?: 'span' | 'button';
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<ArrowButtonProps['size']>, string> = {
  sm: 'w-9 h-9',
  md: 'w-10 h-10',
  lg: 'w-[52px] h-[52px]',
};

const VARIANT_CLASSES: Record<NonNullable<ArrowButtonProps['variant']>, string> = {
  surface:
    'bg-bg text-ink border border-hairline group-hover:bg-accent group-hover:border-accent',
  accent:
    'bg-white text-ink group-hover:bg-ink group-hover:text-white',
  dark:
    'bg-white text-ink group-hover:bg-accent group-hover:text-on-accent',
};

export function ArrowButton({
  variant = 'surface',
  size = 'md',
  as = 'span',
  ariaLabel,
  onClick,
  className = '',
}: ArrowButtonProps) {
  const classes = `inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-250 ease-argo ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`;

  const icon = (
    <ArrowUpRight
      className="h-[18px] w-[18px] transition-transform duration-300 ease-argo group-hover:rotate-45"
      strokeWidth={1.75}
      aria-hidden="true"
    />
  );

  if (as === 'button') {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        className={`${classes} active:scale-[0.98]`}
      >
        {icon}
      </button>
    );
  }

  return (
    <span aria-hidden="true" className={classes}>
      {icon}
    </span>
  );
}
