import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SiteHeader from './SiteHeader';
import MobileMenu from './MobileMenu';
import SiteFooter from './SiteFooter';
import MobileCtaBar from './MobileCtaBar';
import IconSymbols from '../common/IconSymbols';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { useSmoothAnchors } from '../../hooks/useSmoothAnchors';
import { useScrollEffects } from '../../hooks/useScrollEffects';
const Layout = ({ children }) => {
    const mobileMenu = useMobileMenu();
    useSmoothAnchors();
    useScrollEffects();
    return (_jsxs("div", { className: "site-shell", children: [_jsx(IconSymbols, {}), _jsx(SiteHeader, { onToggleMenu: mobileMenu.toggle, isMenuOpen: mobileMenu.open }), _jsx(MobileMenu, { isOpen: mobileMenu.open, onNavigate: mobileMenu.close }), _jsx("main", { children: children }), _jsx(SiteFooter, {}), _jsx(MobileCtaBar, {})] }));
};
export default Layout;
