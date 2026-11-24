import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Animates a counter from 0 to `target` over `durationMs` (default 1600ms)
 * using easeOutCubic when `inView` becomes true.
 * Returns null if `target` is null (placeholder mode).
 */
export function useCountUp(
  target: number | null,
  inView: boolean,
  durationMs = 1600
): number | null {
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState<number | null>(() =>
    target === null ? null : prefersReducedMotion ? target : 0
  );

  useEffect(() => {
    if (target === null) {
      setValue(null);
      return;
    }
    if (!inView) return;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    let rafId = 0;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutCubic(progress);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, inView, durationMs, prefersReducedMotion]);

  return value;
}
