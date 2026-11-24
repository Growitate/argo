import { motion } from 'framer-motion';
import { Check, Mail } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ARGO_EASE } from './Reveal';

interface FormSuccessViewProps {
  title: string;
  description: string;
  selectionHighlight: string;
  recipientEmail: string;
  mailtoUrl: string | null;
  resetLabel: string;
  onReset: () => void;
}

export function FormSuccessView({
  title,
  description,
  selectionHighlight,
  recipientEmail,
  mailtoUrl,
  resetLabel,
  onReset,
}: FormSuccessViewProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center py-8 text-center">
      <motion.div
        initial={{ scale: prefersReducedMotion ? 1 : 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.45, ease: ARGO_EASE }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-ink"
      >
        <Check className="h-8 w-8" strokeWidth={2.25} aria-hidden="true" />
      </motion.div>

      <h3 className="mt-5 text-2xl font-medium text-ink">{title}</h3>
      <p className="mt-2 max-w-[46ch] text-[0.9375rem] leading-[1.6] text-ink-soft">
        {description}{' '}
        <span className="font-medium text-ink">{selectionHighlight}</span>{' '}
        ({recipientEmail}).
      </p>

      {mailtoUrl && (
        <a
          href={mailtoUrl}
          className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-6 text-[0.9375rem] font-medium text-on-accent transition-colors hover:bg-accent-deep"
        >
          <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          <span>Open Email Client Again</span>
        </a>
      )}

      <button
        type="button"
        onClick={onReset}
        className="mt-4 inline-flex min-h-[44px] items-center rounded-full px-4 text-[0.875rem] font-medium text-ink-soft underline underline-offset-4 hover:text-ink"
      >
        {resetLabel}
      </button>
    </div>
  );
}
