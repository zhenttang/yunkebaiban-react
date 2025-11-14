import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const footerLinks = [
    {
        title: '产品',
        items: [
            { label: '功能特性', href: '#features', disabled: false },
            { label: '产品详情', href: '/product', disabled: false },
            { label: '下载', href: '/download', disabled: false }
        ]
    },
    {
        title: '资源',
        items: [
            { label: '文档', href: '#docs', disabled: true },
            { label: 'API 文档', href: '#', disabled: true },
            { label: '开发者', href: '#', disabled: true }
        ]
    },
    {
        title: '公司',
        items: [
            { label: '关于我们', href: '#about', disabled: true },
            { label: '联系我们', href: '/contact', disabled: false },
            { label: '招聘', href: '#', disabled: true }
        ]
    },
    {
        title: '法律',
        items: [
            { label: '用户协议', href: '#', disabled: true },
            { label: '隐私政策', href: '#', disabled: true },
            { label: '开源许可', href: '#', disabled: true }
        ]
    }
];
const SiteFooter = () => {
    return (_jsx("footer", { role: "contentinfo", children: _jsxs("div", { className: "container foot", children: [_jsxs("div", { children: [_jsx("div", { className: "brand", children: "\u4E91\u79D1\u767D\u677F" }), _jsxs("p", { className: "muted", children: ["\u00A9 ", new Date().getFullYear(), " Yunke Inc. \u4FDD\u7559\u6240\u6709\u6743\u5229"] })] }), _jsx("div", { className: "links", children: footerLinks.map(group => (_jsxs("div", { className: "link-group", children: [_jsx("h4", { children: group.title }), group.items.map(item => (_jsxs("a", { href: item.disabled ? undefined : item.href, className: item.disabled ? 'link-disabled' : undefined, onClick: item.disabled ? e => e.preventDefault() : undefined, children: [item.label, item.disabled && _jsx("span", { className: "link-line", "aria-hidden": "true" })] }, item.label)))] }, group.title))) })] }) }));
};
export default SiteFooter;
