import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const SiteHeader = ({ onToggleMenu, isMenuOpen }) => {
    return (_jsx("header", { className: "nav", role: "banner", children: _jsxs("div", { className: "container navgrid", children: [_jsx("div", { className: "left", children: _jsxs(Link, { className: "brand", to: "/", children: [_jsx("span", { className: "logo", children: "Y" }), _jsx("span", { children: "\u4E91\u79D1\u767D\u677F" })] }) }), _jsx("nav", { className: "center", "aria-label": "\u4E3B\u5BFC\u822A", children: navItems.map(item => (_jsx(NavLink, { to: item.path, end: item.path === '/', children: item.label }, item.path))) }), _jsx("div", { className: "right", children: _jsx("a", { className: "btn btn-primary", href: "/contact", children: "\u8054\u7CFB\u6211\u4EEC" }) }), _jsxs("button", { className: `nav-toggle ${isMenuOpen ? 'is-open' : ''}`, "aria-label": "\u6253\u5F00\u4E3B\u83DC\u5355", "aria-controls": "mobile-menu", "aria-expanded": isMenuOpen ? 'true' : 'false', onClick: onToggleMenu, children: [_jsx("span", {}), _jsx("span", {})] })] }) }));
};
export default SiteHeader;
