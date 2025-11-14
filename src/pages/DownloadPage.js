import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { changelog, platformCards, securityCards } from '../data/download';
const detectOS = () => {
    if (typeof navigator === 'undefined')
        return { os: 'linux' };
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const platform = navigator.platform || '';
    if (/iPhone|iPad|iPod/.test(ua))
        return { os: 'ios' };
    if (/Android/.test(ua))
        return { os: 'android' };
    if (/Mac/.test(platform) || /Mac OS X/.test(ua))
        return { os: 'mac' };
    if (/Win/.test(platform) || /Windows/.test(ua)) {
        return { os: 'win', arch: ua.includes('ARM') ? 'arm64' : 'x64' };
    }
    return { os: 'linux' };
};
const DownloadPage = () => {
    const [detected, setDetected] = useState(() => detectOS());
    useEffect(() => {
        setDetected(detectOS());
    }, []);
    const heroCTA = useMemo(() => {
        const map = {
            win: { label: `下载适用于 Windows（${detected.arch || 'x64'}）`, href: '#win' },
            mac: { label: '下载适用于 macOS', href: '#mac' },
            linux: { label: '下载适用于 Linux', href: '#linux' },
            ios: { label: '前往 App Store', href: '#ios' },
            android: { label: '前往 Google Play', href: '#android' }
        };
        return map[detected.os];
    }, [detected]);
    const mobileReco = useMemo(() => {
        const map = {
            win: {
                title: '推荐 Windows 版本',
                desc: `检测到 Windows ${detected.arch || 'x64'}，点击立刻下载桌面版。`,
                primary: { label: '下载 Windows 版', href: '#win' },
                secondary: { label: '其他平台', href: '#all-platforms' }
            },
            mac: {
                title: '推荐 macOS 版本',
                desc: '使用 macOS？一键前往通用安装包或 App Store。',
                primary: { label: '下载 macOS 版', href: '#mac' },
                secondary: { label: '查看全部平台', href: '#all-platforms' }
            },
            linux: {
                title: '推荐 Linux 版本',
                desc: '支持 .deb / .rpm / AppImage，选择适合你的发行版。',
                primary: { label: '下载 Linux 版', href: '#linux' },
                secondary: { label: '查看其他平台', href: '#all-platforms' }
            },
            ios: {
                title: '推荐 iOS 版本',
                desc: '前往 App Store 或 TestFlight 体验移动白板。',
                primary: { label: '打开 App Store', href: '#ios' },
                secondary: { label: '了解桌面端', href: '#all-platforms' }
            },
            android: {
                title: '推荐 Android 版本',
                desc: 'Google Play / APK 双渠道下载，随时移动协作。',
                primary: { label: '打开 Google Play', href: '#android' },
                secondary: { label: '查看桌面端', href: '#all-platforms' }
            }
        };
        return map[detected.os];
    }, [detected]);
    return (_jsxs("div", { className: "page-download", children: [_jsx("main", { id: "download", className: "hero", role: "main", children: _jsxs("div", { className: "container hero-grid minimal", children: [_jsxs("div", { className: "hero-content", children: [_jsx("div", { className: "kicker", children: "DOWNLOAD" }), _jsx("h1", { children: "\u66F4\u5FEB\u66F4\u7A33\u7684\u4F01\u4E1A\u7EA7\u767D\u677F" }), _jsx("p", { className: "sub", children: "\u4E00\u952E\u5B89\u88C5\uFF0C\u4E0E\u56E2\u961F\u5373\u523B\u534F\u4F5C" }), _jsxs("div", { className: "hero-actions", children: [_jsx("a", { id: "primary-cta", className: "btn btn-primary btn-large", href: heroCTA.href, children: heroCTA.label }), _jsx("a", { className: "btn btn-accent btn-large", href: "#all-platforms", children: "\u6240\u6709\u5E73\u53F0\u4E0E\u7248\u672C" })] })] }), _jsxs("div", { className: "hero-card", "aria-label": "\u4E0B\u8F7D\u72B6\u6001", children: [_jsxs("div", { className: "item", children: [_jsx("span", { children: "\u5F53\u524D\u7A33\u5B9A\u7248" }), _jsx("strong", { children: "v1.12.0" })] }), _jsxs("div", { className: "item", children: [_jsx("span", { children: "\u9884\u89C8\u7248" }), _jsx("strong", { children: "v1.13.0" })] }), _jsxs("div", { className: "item", children: [_jsx("span", { children: "\u68C0\u6D4B\u5E73\u53F0" }), _jsx("strong", { children: "\u81EA\u52A8" })] })] })] }) }), _jsx("section", { className: "section mobile-only", "aria-label": "\u5FEB\u6377\u4E0B\u8F7D", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "mobile-reco", children: [_jsx("h2", { id: "reco-title", children: mobileReco.title }), _jsx("p", { className: "muted", id: "reco-desc", children: mobileReco.desc }), _jsxs("div", { className: "reco-actions", children: [_jsx("a", { className: "btn btn-primary", id: "reco-primary", href: mobileReco.primary.href, children: mobileReco.primary.label }), _jsx("a", { className: "btn btn-accent", id: "reco-secondary", href: mobileReco.secondary.href, children: mobileReco.secondary.label })] })] }) }) }), _jsx("section", { id: "all-platforms", className: "section", "aria-label": "\u6240\u6709\u5E73\u53F0", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "\u6240\u6709\u5E73\u53F0" }), _jsx("div", { className: "cols cards-snap", role: "list", children: platformCards.map(card => (_jsxs("article", { className: "panel", role: "listitem", id: card.id, children: [_jsx("header", { children: _jsx("h3", { children: card.title }) }), _jsx("p", { className: "muted", children: card.subtitle }), _jsx("div", { className: "platform-actions", children: card.actions.map(action => (_jsx("a", { className: `btn ${action.type === 'accent' ? 'btn-accent' : 'btn-primary'}`, id: action.id, href: action.href || '#', children: action.label }, action.label))) }), card.details && (_jsxs("details", { children: [_jsx("summary", { children: card.details.summary }), _jsx("div", { className: "row", style: { justifyContent: 'flex-start' }, children: card.details.code && _jsx("code", { className: "code", "data-copy": card.details.code, children: card.details.code }) }), card.details.note && _jsx("p", { className: "muted", children: card.details.note })] }))] }, card.id))) })] }) }), _jsx("section", { id: "security", className: "section section-alt", "aria-label": "\u5B89\u5168\u4E0E\u6821\u9A8C", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "\u5B89\u5168\u4E0E\u6821\u9A8C" }), _jsx("div", { className: "cols", children: securityCards.map(card => (_jsxs("article", { className: "panel", children: [_jsx("header", { children: _jsx("h3", { children: card.title }) }), card.lines.map((line, idx) => (_jsx("p", { children: line }, `${card.title}-${idx}`)))] }, card.title))) })] }) }), _jsx("section", { id: "changelog", className: "section", "aria-label": "\u7248\u672C\u4E0E\u66F4\u65B0\u65E5\u5FD7", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "\u7248\u672C\u4E0E\u66F4\u65B0\u65E5\u5FD7" }), _jsx("div", { className: "cols", children: changelog.map(log => (_jsxs("article", { className: "panel", children: [_jsx("header", { children: _jsx("h3", { children: log.version }) }), _jsx("ul", { children: log.items.map(item => (_jsx("li", { children: item }, item))) }), _jsx("p", { className: "muted", children: log.note })] }, log.version))) })] }) }), _jsx("section", { className: "section cta-section", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "\u5F00\u59CB\u4F7F\u7528\u4E91\u79D1\u767D\u677F" }), _jsx("p", { className: "section-subtitle", children: "\u514D\u8D39\u8BD5\u7528\uFF0C\u65E0\u9700\u4FE1\u7528\u5361\uFF0C5 \u5206\u949F\u5FEB\u901F\u4E0A\u624B" }), _jsxs("div", { className: "row hero-actions", children: [_jsx("a", { className: "btn btn-primary btn-large", href: "#all-platforms", children: "\u9009\u62E9\u7248\u672C" }), _jsx("a", { className: "btn btn-accent btn-large", href: "/pricing", children: "\u54A8\u8BE2\u65B9\u6848" })] })] }) })] }));
};
export default DownloadPage;
