import { useEffect } from 'react';
import { rafThrottle } from '../utils/rafThrottle';
export const useScrollEffects = () => {
    useEffect(() => {
        const nav = document.querySelector('.nav');
        if (!nav)
            return;
        const onScroll = rafThrottle(() => {
            const current = window.pageYOffset;
            nav.setAttribute('style', current > 100 ? 'box-shadow: 0 2px 8px rgba(0,0,0,0.1);' : 'box-shadow: none;');
        });
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(() => {
        if (!('IntersectionObserver' in window))
            return;
        const cards = Array.from(document.querySelectorAll('.panel, .card'));
        const readyCards = cards.filter(card => !card.dataset.animated);
        readyCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.dataset.animated = 'pending';
        });
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    el.dataset.animated = 'done';
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        readyCards.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);
};
