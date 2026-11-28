import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, ROUTE_SEO, SITE_URL } from '../data/seoConfig';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO[pathname] ?? ROUTE_SEO['/'];
    const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`;

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords);
    upsertCanonical(canonicalUrl);

    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', seo.ogTitle);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE);

    upsertMeta('name', 'twitter:title', seo.ogTitle);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);

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
