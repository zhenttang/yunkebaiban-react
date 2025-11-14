import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: '首页' },
  { path: '/product', label: '产品' },
  { path: '/solutions', label: '解决方案' },
  { path: '/download', label: '下载' },
  { path: '/pricing', label: '定价' },
  { path: '/opensource', label: '开源' },
  { path: '/contact', label: '联系我们' }
];

type SiteHeaderProps = {
  onToggleMenu?: () => void;
  isMenuOpen?: boolean;
};

const SiteHeader = ({ onToggleMenu, isMenuOpen }: SiteHeaderProps) => {
  return (
    <header className="nav" role="banner">
      <div className="container navgrid">
        <div className="left">
          <Link className="brand" to="/">
            <span className="logo">Y</span>
            <span>云科白板</span>
          </Link>
        </div>
        <nav className="center" aria-label="主导航">
          {navItems.map(item => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="right">
          <a className="btn btn-primary" href="/contact">联系我们</a>
        </div>
        <button
          className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="打开主菜单"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={onToggleMenu}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default SiteHeader;
