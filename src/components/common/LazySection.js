import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
const LazySection = ({ children, className, ...rest }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (visible)
            return;
        if (!('IntersectionObserver' in window)) {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
        if (ref.current)
            observer.observe(ref.current);
        return () => observer.disconnect();
    }, [visible]);
    return (_jsx("div", { ref: ref, className: className, ...rest, children: visible ? children : null }));
};
export default LazySection;
