import { PropsWithChildren } from 'react';
import SiteHeader from './SiteHeader';
import MobileMenu from './MobileMenu';
import SiteFooter from './SiteFooter';
import MobileCtaBar from './MobileCtaBar';
import IconSymbols from '../common/IconSymbols';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { useSmoothAnchors } from '../../hooks/useSmoothAnchors';
import { useScrollEffects } from '../../hooks/useScrollEffects';

const Layout = ({ children }: PropsWithChildren) => {
  const mobileMenu = useMobileMenu();
  useSmoothAnchors();
  useScrollEffects();

  return (
    <div className="site-shell">
      <IconSymbols />
      <SiteHeader onToggleMenu={mobileMenu.toggle} isMenuOpen={mobileMenu.open} />
      <MobileMenu isOpen={mobileMenu.open} onNavigate={mobileMenu.close} />
      <main>{children}</main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  );
};

export default Layout;
