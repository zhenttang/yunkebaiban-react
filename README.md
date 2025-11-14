# 云科白板 React 版

<p align="center">
  <img src="./new.png" alt="Yunke Logo" width="240" />
</p>

> “为爱发电，让协作更闪耀。” 这是云科白板开源计划的主题，我们用 React + Vite 重构了一比一的官网与下载面板，欢迎你参与共建。

## ✨ 项目亮点

- **多端视觉复刻**：完整迁移原版 Neo-Brutalist 设计，保留桌面/移动特有布局与滚动叙事。
- **数据驱动**：特性、定价、平台列表等全部结构化，方便扩展为 API 数据。
- **交互 Hook**：移动菜单、滚动锚点、Intersection Observer 动画、下载页 OS 检测、定价切换、开源仓库实时统计等以 Hook 管理。
- **性能友好的懒加载**：路由级代码拆分 + LazySection 延迟渲染重内容区，保持首屏轻量。
- **开源向社区开放**：在 `/opensource` 页面实时展示 GitHub Star / Fork，提供贡献指引。

## 📁 目录结构

```
yunkebaiban-react/
├── src/
│   ├── components/        # Layout、共用 UI、懒加载容器、IconSymbols
│   ├── data/              # 页面数据（特性、平台、定价等）
│   ├── hooks/             # useMobileMenu/useStorySteps/useSmoothAnchors 等
│   ├── pages/             # Home/Product/Solutions/Download/Pricing/Contact/OpenSource/Sponsor
│   ├── styles/site.css    # 一比一复刻的全局样式
│   └── utils/             # rafThrottle 等小工具
└── new.png                # 品牌 Logo，README 中展示
```

## 🚀 快速开始

```bash
npm install
npm run dev
```

- `npm run build`：产出生产版本。
- `npm run preview`：构建后本地预览。

## 📌 SVG 图标（示例）

项目中的核心特性使用自绘 SVG，可复用于其它场景。

```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="spark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff6b4a"/>
      <stop offset="100%" stop-color="#335dff"/>
    </linearGradient>
  </defs>
  <rect x="2" y="10" width="60" height="32" rx="6" stroke="url(#spark)" stroke-width="3" fill="none"/>
  <path d="M16 48h32" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <path d="M24 44v12M40 44v12" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <path d="M16 22h32M16 30h32" stroke="#111" stroke-width="3"/>
</svg>
```

> 如果你想替换现有图标，只需修改 `src/components/common/IconSymbols.tsx` 中的 `<symbol>` 定义即可。

## 🤝 参与贡献

1. Fork 仓库并 `git checkout -b feature/awesome`
2. 完成开发 + `npm run build` 验证
3. 提交 PR，我们会在 48 小时内 Review

## 💖 赞助 & 联系

- `/sponsor` 页面提供赞助梯队，点击 “我要支持” 会获得温暖提示。
- `/contact` 页面提供邮箱、电话和表单占位，欢迎商务/技术合作。

## 📜 License

Apache-2.0。

> 欢迎在 Issue 或 Discussions 中分享你的使用心得，一起把云科白板做成最有温度的协作体验。
