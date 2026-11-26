import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Animates a counter from 0 to `target` over `durationMs` (default 850ms)
 * using easeOutCubic whenever `inView` becomes true, and resets to 0 when offscreen.
 * Only updates React state when the rounded integer changes to avoid frame lag.
 */
export function useCountUp(
  target: number | null,
  inView: boolean,
  durationMs = 850
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
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }
    if (!inView) {
      setValue(0);
      return;
    }

    let rafId = 0;
    let lastValue = 0;
    setValue(0);
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutCubic(progress);
      const nextValue = Math.round(eased * target);

      if (nextValue !== lastValue) {
        lastValue = nextValue;
        setValue(nextValue);
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else if (lastValue !== target) {
        setValue(target);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, inView, durationMs, prefersReducedMotion]);

  return value;
}
