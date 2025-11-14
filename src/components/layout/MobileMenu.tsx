import { Link } from 'react-router-dom';

type MobileMenuProps = {
  isOpen?: boolean;
  onNavigate?: () => void;
};

const MobileMenu = ({ isOpen, onNavigate }: MobileMenuProps) => (
  <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobile-menu">
    <Link to="/" onClick={onNavigate}>
      首页
    </Link>
    <Link to="/product" onClick={onNavigate}>
      产品
    </Link>
    <Link to="/solutions" onClick={onNavigate}>
      解决方案
    </Link>
    <Link to="/download" onClick={onNavigate}>
      下载
    </Link>
    <Link to="/pricing" onClick={onNavigate}>
      定价
    </Link>
    <Link to="/opensource" onClick={onNavigate}>
      开源
    </Link>
    <Link to="/contact" onClick={onNavigate}>
      联系我们
    </Link>
    <div className="mobile-actions">
      <a className="btn btn-primary" href="/contact">
        联系我们
      </a>
    </div>
  </div>
);

export default MobileMenu;
