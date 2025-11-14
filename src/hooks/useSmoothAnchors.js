import { useEffect } from 'react';
export const useSmoothAnchors = () => {
    useEffect(() => {
        const handler = (event) => {
            const target = event.target;
            const anchor = target?.closest('a[href^="#"]');
            if (!anchor)
                return;
            const href = anchor.getAttribute('href');
            if (!href || href === '#')
                return;
            const section = document.querySelector(href);
            if (section) {
                event.preventDefault();
                const offset = section.offsetTop - 64;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        };
        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, []);
};
