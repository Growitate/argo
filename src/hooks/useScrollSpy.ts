import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently active in the viewport.
 */
export function useScrollSpy(sectionIds: string[], offsetPx = 140): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? 'hero');

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offsetPx;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= top) {
          current = id;
        }
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, offsetPx]);

  return activeId;
}
