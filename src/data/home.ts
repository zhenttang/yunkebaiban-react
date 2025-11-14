import { ReactNode } from 'react';

export const heroMetrics = [
  { label: '同步延迟', value: '45 ms', desc: '跨区域平均值' },
  { label: '权限控制', value: '16 级', desc: '细粒度企业策略' },
  { label: '模板数量', value: '320+', desc: '覆盖主流场景' }
];

export const trustLogos = [
  '星火科技',
  '北辰能源',
  'Atlas Studio',
  '雨林研究院',
  '青云教育',
  'NOVA Robotics',
  '瀚海设计',
  '联盟咨询'
];

export type Feature = {
  label: string;
  icon: ReactNode;
  title: string;
  body: string;
  bullets: string[];
};

export const coreFeatures = [
  {
    label: 'REALTIME',
    icon: '#icon-collaboration',
    title: '实时协作',
    body: '基于 YJS CRDT 技术，多人同时编辑无冲突，毫秒级同步延迟，让团队协作更流畅。',
    bullets: ['多用户实时编辑', '游标同步显示', '冲突自动合并']
  },
  {
    label: 'CROSS-PLATFORM',
    icon: '#icon-platform',
    title: '跨平台同步',
    body: '支持 Windows、macOS、Linux、iOS、Android 全平台，数据云端同步，随时随地访问。',
    bullets: ['Windows / macOS / Linux', 'iOS / Android 移动端', 'Web 浏览器访问']
  },
  {
    label: 'SECURITY',
    icon: '#icon-security',
    title: '企业级安全',
    body: '数据加密存储，代码签名认证，支持企业私有部署，满足合规要求。',
    bullets: ['端到端加密', '私有化部署', 'SOC2 合规']
  },
  {
    label: 'OFFLINE',
    icon: '#icon-offline',
    title: '离线支持',
    body: '支持离线编辑，自动同步，网络恢复后无缝同步，保障工作连续性。',
    bullets: ['离线编辑', '自动同步', '版本历史']
  }
];

export const statsHighlight = [
  { title: '全球节点', value: '18', desc: '亚太 / 北美 / 欧盟多活部署，自动选择最优线路' },
  { title: '可靠性', value: '99.98%', desc: '跨区容灾与分钟级回滚，保障关键文档安全' },
  { title: '模板增长', value: '+42%', desc: '每月新增行业白板模板，随取随用' },
  { title: '自动化流程', value: '260+', desc: 'Webhook & API 接口与企业自建系统联动' }
];

export const storySteps = [
  {
    indicator: '01 · Start',
    title: '启动白板',
    body: '挑选行业模板或空白画布，自动同步权限与标签，秒级生成可协作空间。',
    activeTitle: '启动白板',
    activeDesc: '创建多人空间，套用模板，邀请团队同步进入。'
  },
  {
    indicator: '02 · Sync',
    title: '实时协作',
    body: '可视化光标、批注、语音/视频通话，与 AI 排版助手联动，毫秒级同步不掉线。',
    activeTitle: '实时协作',
    activeDesc: '多人光标、语音/视频、AI 助理同步工作，毫秒级延迟。'
  },
  {
    indicator: '03 · Record',
    title: '自动记录',
    body: '评论、任务、版本历史自动沉淀，并通过 Webhook 推送到项目或知识库系统。',
    activeTitle: '自动记录',
    activeDesc: '评论、任务、版本历史全部归档，并与企业系统联动。'
  },
  {
    indicator: '04 · Reuse',
    title: '沉淀复用',
    body: '基于成果生成模板，纳入知识库或分享链接，下次项目直接复用最佳实践。',
    activeTitle: '沉淀复用',
    activeDesc: '一键生成模板，纳入知识库，供下次项目直接复用。'
  }
];

export const solutionCards = [
  {
    label: 'TEAMWORK',
    title: '团队协作',
    desc: '远程团队实时协作，头脑风暴，项目规划，让创意不再受地域限制。',
    bullets: ['远程会议白板', '项目规划', '头脑风暴']
  },
  {
    label: 'KNOWLEDGE',
    title: '知识管理',
    desc: '构建团队知识库，文档协作，知识沉淀，让知识成为团队资产。',
    bullets: ['知识库建设', '文档协作', '知识沉淀']
  },
  {
    label: 'EDUCATION',
    title: '培训教育',
    desc: '在线教学白板，实时互动，课件制作，提升教学效果。',
    bullets: ['在线教学', '课件制作', '作业批改']
  }
];

export const technologyBlocks = [
  {
    label: 'CRDT',
    title: 'YJS CRDT 技术',
    desc: '基于 CRDT 技术，确保多用户编辑时数据一致性，无需中央服务器协调。',
    code: '冲突自动合并 · 毫秒级同步 · 离线可用'
  },
  {
    label: 'RENDER',
    title: '高性能渲染',
    desc: 'Canvas 渲染引擎，支持大文档流畅编辑，优化内存使用，提升渲染性能 25%。',
    code: 'Canvas 渲染 · 增量更新 · 内存优化'
  },
  {
    label: 'SECURITY',
    title: '数据安全',
    desc: '支持端到端加密，数据存储在云端和本地双重备份，支持企业私有化部署。',
    code: 'E2E 加密 · 双重备份 · 私有部署'
  }
];

export const platformCards = [
  { tag: '桌面', title: 'Windows', desc: 'Windows 10/11 · x64 / Arm64', link: '/download#win' },
  { tag: '桌面', title: 'macOS', desc: 'macOS 12+ · Intel / Apple Silicon', link: '/download#mac' },
  { tag: '桌面', title: 'Linux', desc: '.deb / .rpm / AppImage', link: '/download#linux' },
  { tag: '移动', title: 'iOS', desc: 'App Store / TestFlight', link: '/download#ios' },
  { tag: '移动', title: 'Android', desc: 'Google Play / APK', link: '/download#android' },
  { tag: 'Web', title: 'Web', desc: '浏览器直接访问', link: '#' }
];
