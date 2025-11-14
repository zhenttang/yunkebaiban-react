import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const repos = [
    {
        name: '前端 Web',
        stack: 'React · Vite · TypeScript',
        desc: '企业官网与面板前端，包含多端自适应、滚动叙事、平台下载页。',
        repo: 'zhenttang/baibanfront'
    },
    {
        name: 'Java 后端',
        stack: 'Spring Boot · MySQL · Redis',
        desc: '已经开源的核心协作服务，提供鉴权、文档存储、实时同步接口。',
        repo: 'zhenttang/baibanadmin'
    },
    {
        name: '实时协作引擎 (YJS)',
        stack: 'Yjs · WebSocket · CRDT',
        desc: '负责白板实时同步的 YJS 层，持续优化性能与离线体验。',
        repo: 'zhenttang/baibanYjs'
    }
];
const heroHighlights = [
    { title: '前端', desc: 'React · Vite · TypeScript' },
    { title: '后端', desc: 'Java · Spring Boot · MySQL' },
    { title: '实时引擎', desc: 'Yjs · CRDT · WebSocket' }
];
const OpenSourcePage = () => {
    const [stats, setStats] = useState({});
    useEffect(() => {
        let cancelled = false;
        Promise.all(repos.map(async (repo) => {
            try {
                const res = await fetch(`https://api.github.com/repos/${repo.repo}`);
                if (!res.ok)
                    return [repo.repo, null];
                const data = await res.json();
                return [repo.repo, { stars: data.stargazers_count, forks: data.forks_count }];
            }
            catch (err) {
                return [repo.repo, null];
            }
        })).then(entries => {
            if (cancelled)
                return;
            const next = {};
            entries.forEach(([key, value]) => {
                if (value)
                    next[key] = value;
            });
            setStats(next);
        });
        return () => {
            cancelled = true;
        };
    }, []);
    return (_jsxs("div", { className: "page-opensource", children: [_jsx("main", { className: "hero hero-product", role: "main", children: _jsxs("div", { className: "container hero-grid minimal", children: [_jsxs("div", { className: "hero-content", children: [_jsx("div", { className: "kicker", children: "FOR LOVE" }), _jsxs("h1", { className: "love-headline", children: ["\u4E3A\u7231\u53D1\u7535", _jsx("span", { children: "\u8BA9\u534F\u4F5C\u66F4\u95EA\u8000" })] }), _jsx("p", { className: "love-sub", children: "Write \u00B7 Share \u00B7 Spark\u3002\u4E91\u79D1\u767D\u677F\u5411\u793E\u533A\u5F00\u653E\u6838\u5FC3\u80FD\u529B\uFF0C\u9080\u8BF7\u6BCF\u4E00\u4F4D\u70ED\u7231\u534F\u4F5C\u5DE5\u5177\u7684\u5F00\u53D1\u8005\u4E00\u8D77\u96D5\u7422\u4F53\u9A8C\uFF1A\u5199\u4EE3\u7801\u3001\u8865\u6587\u6863\u3001 share best practice\uFF0C\u6216\u4EC5\u4EC5\u662F\u63D0\u4E00\u4E2A\u60F3\u6CD5\u2014\u2014\u90FD\u7B97\u6570\u3002" }), _jsx("div", { className: "love-highlights", children: heroHighlights.map(item => (_jsxs("div", { className: "love-chip", children: [_jsx("strong", { children: item.title }), _jsx("span", { children: item.desc })] }, item.title))) })] }), _jsxs("div", { className: "hero-card", "aria-label": "\u5F00\u6E90\u58F0\u660E", children: [_jsxs("div", { className: "item", children: [_jsx("span", { children: "\u76EE\u524D\u5F00\u6E90" }), _jsx("strong", { children: "Java \u540E\u7AEF" })] }), _jsxs("div", { className: "item", children: [_jsx("span", { children: "License" }), _jsx("strong", { children: "Apache 2.0" })] }), _jsxs("div", { className: "item", children: [_jsx("span", { children: "\u8D21\u732E\u6307\u5357" }), _jsx("strong", { children: "README / CONTRIBUTING" })] })] })] }) }), _jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "GitHub \u9879\u76EE" }), _jsx("p", { className: "muted", children: "\u6D4F\u89C8\u4ED3\u5E93\uFF0C\u63D0\u4EA4 Issue / PR\uFF0C\u4E00\u8D77\u628A\u4E91\u79D1\u767D\u677F\u6253\u9020\u6210\u66F4\u5F3A\u5927\u7684\u534F\u4F5C\u5DE5\u5177\u3002" }), _jsx("div", { className: "cols cards-snap", children: repos.map(repo => (_jsxs("article", { className: "panel", children: [_jsx("span", { className: "panel-label", children: repo.stack }), _jsx("header", { children: _jsx("h3", { children: repo.name }) }), _jsx("p", { className: "muted", children: repo.desc }), stats[repo.repo] && (_jsxs("p", { className: "muted", style: { fontSize: '0.9rem' }, children: ["\u2B50 ", stats[repo.repo].stars, " \u00B7 \uD83C\uDF74 ", stats[repo.repo].forks] })), _jsx("a", { className: "btn btn-primary", href: `https://github.com/${repo.repo}`, target: "_blank", rel: "noreferrer", children: "\u524D\u5F80 GitHub" })] }, repo.name))) })] }) }), _jsx("section", { className: "section section-alt", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "\u5982\u4F55\u53C2\u4E0E" }), _jsxs("div", { className: "cols cards-snap", children: [_jsxs("article", { className: "panel", children: [_jsx("h3", { children: "\u63D0\u4EA4 Issue" }), _jsx("p", { className: "muted", children: "\u53CD\u9988 bug\u3001\u63D0\u51FA\u65B0\u7279\u6027\u6216\u5206\u4EAB\u4F7F\u7528\u4F53\u9A8C\u3002\u6211\u4EEC\u4F1A\u5728 48 \u5C0F\u65F6\u5185\u56DE\u590D\u3002" })] }), _jsxs("article", { className: "panel", children: [_jsx("h3", { children: "\u8D21\u732E\u4EE3\u7801" }), _jsx("p", { className: "muted", children: "\u53C2\u8003 CONTRIBUTING \u6D41\u7A0B Fork \u2192 \u5F00\u53D1 \u2192 PR\uFF0C\u7EF4\u62A4\u8005\u4F1A\u534F\u52A9 Code Review\u3002" })] }), _jsxs("article", { className: "panel", children: [_jsx("h3", { children: "\u64B0\u5199\u6587\u6863" }), _jsx("p", { className: "muted", children: "\u8865\u5145\u6559\u7A0B\u3001\u6848\u4F8B\u3001\u6700\u4F73\u5B9E\u8DF5\uFF0C\u5E2E\u52A9\u66F4\u591A\u56E2\u961F\u5FEB\u901F\u4E0A\u624B\u3002" })] })] })] }) }), _jsx("section", { className: "section cta-section", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "\u70B9\u4EAE\u4F60\u7684\u8D21\u732E" }), _jsx("p", { className: "section-subtitle", children: "star / watch \u4ED3\u5E93\uFF0C\u548C\u6211\u4EEC\u4E00\u8D77\u8FED\u4EE3\u4E91\u79D1\u767D\u677F\u3002" }), _jsxs("div", { className: "row hero-actions", children: [_jsx("a", { className: "btn btn-primary btn-large", href: "https://github.com/zhenttang/baibanadmin", target: "_blank", rel: "noreferrer", children: "\u6D4F\u89C8 GitHub" }), _jsx("a", { className: "btn btn-accent btn-large", href: "/contact", children: "\u5408\u4F5C & \u8D5E\u52A9" })] })] }) })] }));
};
export default OpenSourcePage;
