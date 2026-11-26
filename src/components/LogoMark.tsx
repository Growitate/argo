interface LogoMarkProps {
  tone?: 'light' | 'dark';
  size?: 'md' | 'lg';
}

export function LogoMark({ tone: _tone = 'light', size = 'lg' }: LogoMarkProps) {
  const sizeClasses =
    size === 'md'
      ? 'h-10 px-5 text-[1.25rem]'
      : 'h-11 px-6 text-[1.375rem] sm:h-12 sm:px-7 sm:text-[1.55rem]';

  return (
    <span
      style={{
        backgroundColor: '#b7e52c',
        backgroundImage: 'linear-gradient(135deg, #cbf63d 0%, #b7e52c 55%, #a2d414 100%)',
        color: '#12372e',
      }}
      className={`group/logo relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent font-semibold leading-none tracking-[-0.03em] text-on-accent shadow-[0_8px_22px_-8px_rgba(183,229,44,0.85)] transition-transform duration-200 ease-argo group-hover/logo:scale-[1.02] ${sizeClasses}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/55"
      />
      <span className="inline-flex items-baseline">
        <span className="font-semibold">Ar</span>
        <span className="font-bold">Go</span>
      </span>
    </span>
  );
}
