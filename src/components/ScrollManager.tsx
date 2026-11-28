import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'ArGo | Home',
  '/about': 'ArGo | About Us',
  '/services': 'ArGo | Services',
  '/careers': 'ArGo | Careers',
  '/contact': 'ArGo | Contact Us',
};

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = ROUTE_TITLES[pathname] ?? ROUTE_TITLES['/'];

    if (hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      const targetId = hash.replace('#', '');
      let attempts = 0;
      let timerId = 0;

      const tryScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        attempts += 1;
        if (attempts < 25) {
          timerId = window.setTimeout(tryScroll, 50);
        }
      };

      timerId = window.setTimeout(tryScroll, 80);
      return () => window.clearTimeout(timerId);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
