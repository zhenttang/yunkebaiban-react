import { useEffect } from 'react';

export const useSmoothAnchors = () => {
  useEffect(() => {
    const handler = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const section = document.querySelector(href);
      if (section) {
        event.preventDefault();
        const offset = (section as HTMLElement).offsetTop - 64;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
};
