import { useEffect, useRef, useState } from 'react';
export const useStorySteps = (count) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const refs = useRef([]);
    useEffect(() => {
        if (!('IntersectionObserver' in window))
            return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const idx = refs.current.findIndex(node => node === entry.target);
                    if (idx >= 0)
                        setActiveIndex(idx);
                }
            });
        }, { threshold: 0.5, rootMargin: '-10% 0px -30% 0px' });
        refs.current.forEach(node => {
            if (node)
                observer.observe(node);
        });
        return () => observer.disconnect();
    }, [count]);
    const setNode = (index) => (node) => {
        refs.current[index] = node;
    };
    return { activeIndex, setNode };
};
