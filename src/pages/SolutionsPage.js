import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { solutionCards } from '../data/home';
const solutionsTimeline = [
    {
        icon: '#icon-team',
        title: '团队协作',
        text: '远程团队实时协作，头脑风暴，项目规划，让创意不再受地域限制。',
        features: [
            { title: '远程会议白板', desc: '实时同步，多人协作，让远程会议更高效' },
            { title: '项目规划', desc: '可视化项目计划，团队进度一目了然' },
            { title: '头脑风暴', desc: '自由创作，思维导图，激发团队创意' }
        ]
    },
    {
        icon: '#icon-knowledge',
        title: '知识管理',
        text: '构建团队知识库，文档协作，知识沉淀，让知识成为团队资产。',
        features: [
            { title: '知识库建设', desc: '结构化存储，便于检索和管理' },
            { title: '文档协作', desc: '多人编辑，版本控制，协作更顺畅' },
            { title: '知识沉淀', desc: '经验总结，最佳实践，传承团队智慧' }
        ]
    },
    {
        icon: '#icon-education',
        title: '培训教育',
        text: '在线教学白板，实时互动，课件制作，提升教学效果。',
        features: [
            { title: '在线教学', desc: '实时互动，板书演示，提升教学体验' },
            { title: '课件制作', desc: '丰富的模板库，快速制作精美课件' },
            { title: '作业批改', desc: '在线批注，反馈及时，提升学习效率' }
        ]
    }
];
const SolutionsPage = () => {
    return (_jsxs("div", { className: "page-solutions", children: [_jsx("main", { className: "hero hero-solutions", role: "main", children: _jsxs("div", { className: "container hero-grid minimal", children: [_jsxs("div", { className: "hero-content", children: [_jsx("div", { className: "kicker", children: "SOLUTIONS" }), _jsx("h1", { children: "\u4E3A\u4E0D\u540C\u573A\u666F\u63D0\u4F9B\u89E3\u51B3\u65B9\u6848" }), _jsx("p", { className: "sub", children: "\u65E0\u8BBA\u56E2\u961F\u89C4\u6A21\u4E0E\u884C\u4E1A\u7C7B\u578B\uFF0C\u4E91\u79D1\u767D\u677F\u90FD\u80FD\u5FEB\u901F\u9002\u914D\uFF0C\u63D0\u4F9B\u4E13\u5C5E\u534F\u4F5C\u65B9\u6848" }), _jsxs("div", { className: "hero-badges", children: [_jsx("span", { className: "badge", children: "100+ \u573A\u666F" }), _jsx("span", { className: "badge", children: "\u79C1\u6709\u5316\u90E8\u7F72" }), _jsx("span", { className: "badge", children: "\u4F01\u4E1A\u652F\u6301" })] })] }), _jsxs("div", { className: "hero-card", "aria-label": "\u70ED\u95E8\u884C\u4E1A\u9700\u6C42", children: [_jsxs("div", { className: "item", children: [_jsx("span", { children: "\u8FDC\u7A0B\u534F\u4F5C" }), _jsx("strong", { children: "70%" })] }), _jsxs("div", { className: "item", children: [_jsx("span", { children: "\u77E5\u8BC6\u6C89\u6DC0" }), _jsx("strong", { children: "45%" })] }), _jsxs("div", { className: "item", children: [_jsx("span", { children: "\u57F9\u8BAD\u6559\u80B2" }), _jsx("strong", { children: "30%" })] })] })] }) }), _jsx("section", { className: "section section-timeline", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "\u9002\u7528\u573A\u666F" }), _jsx("div", { className: "timeline desktop-only", children: solutionsTimeline.map(item => (_jsxs("article", { className: "timeline-item", children: [_jsx("div", { className: "timeline-marker", children: _jsx("svg", { className: "icon icon-lg", children: _jsx("use", { href: item.icon }) }) }), _jsxs("div", { className: "timeline-content", children: [_jsx("h3", { children: item.title }), _jsx("p", { className: "muted", children: item.text }), _jsx("div", { className: "solution-features", children: item.features.map(feature => (_jsxs("div", { className: "solution-feature", children: [_jsx("strong", { children: feature.title }), _jsx("p", { children: feature.desc })] }, feature.title))) }), _jsx("a", { href: "#", className: "btn btn-accent", children: "\u4E86\u89E3\u66F4\u591A" })] })] }, item.title))) }), _jsx("div", { className: "solution-mobile mobile-only", children: solutionCards.map(card => (_jsxs("article", { className: "solution-card", children: [_jsx("h3", { children: card.title }), _jsx("p", { className: "muted", children: card.desc }), _jsx("ul", { children: card.bullets.map(item => (_jsx("li", { children: item }, item))) })] }, card.title))) })] }) }), _jsx("section", { className: "section section-alt section-process", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "\u4F01\u4E1A\u90E8\u7F72\u6D41\u7A0B" }), _jsx("div", { className: "process-steps", children: [
                                { title: '咨询评估', desc: '了解需求，评估部署方案' },
                                { title: '环境准备', desc: '配置服务器环境，准备部署资源' },
                                { title: '部署实施', desc: '安装配置，数据迁移，系统测试' },
                                { title: '培训上线', desc: '用户培训，正式上线，持续支持' }
                            ].map((step, idx) => (_jsxs("div", { className: "process-step", children: [_jsx("div", { className: "step-number", children: idx + 1 }), _jsx("h4", { children: step.title }), _jsx("p", { children: step.desc })] }, step.title))) })] }) }), _jsx("section", { className: "section cta-section", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "\u5F00\u59CB\u4F7F\u7528\u4E91\u79D1\u767D\u677F" }), _jsx("p", { className: "section-subtitle", children: "\u8054\u7CFB\u6211\u4EEC\uFF0C\u83B7\u53D6\u5B9A\u5236\u5316\u89E3\u51B3\u65B9\u6848" }), _jsxs("div", { className: "row hero-actions", children: [_jsx("a", { className: "btn btn-primary btn-large", href: "#", children: "\u8054\u7CFB\u9500\u552E" }), _jsx("a", { className: "btn btn-accent btn-large", href: "/product", children: "\u4E86\u89E3\u4EA7\u54C1" })] })] }) })] }));
};
export default SolutionsPage;
