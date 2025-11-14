import { useEffect, useState } from 'react';
export function useMobileMenu() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    const toggle = () => setOpen(prev => !prev);
    useEffect(() => {
        document.body.classList.toggle('mobile-menu-open', open);
    }, [open]);
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 900)
                close();
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return { open, close, toggle };
}
