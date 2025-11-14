import { HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react';

type LazySectionProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const LazySection = ({ children, className, ...rest }: LazySectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className={className} {...rest}>
      {visible ? children : null}
    </div>
  );
};

export default LazySection;
