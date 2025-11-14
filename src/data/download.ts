export const platformCards = [
  {
    id: 'win',
    title: 'Windows',
    subtitle: 'Windows 10/11 · x64 / Arm64',
    primaryId: 'dl-win',
    actions: [
      { label: '下载 .exe', id: 'dl-win', type: 'primary', href: '#win' },
      { label: '便携包 .zip', id: undefined, type: 'accent', href: '#win' }
    ],
    details: {
      summary: '校验与签名',
      code: 'SHA256: 71b2c...ff9a',
      note: '发布者：Yunke Inc. · 代码签名 · 时间戳服务'
    }
  },
  {
    id: 'mac',
    title: 'macOS',
    subtitle: 'macOS 12+ · Intel / Apple Silicon · notarized',
    actions: [
      { label: '下载 .dmg', id: 'dl-mac', type: 'primary', href: '#mac' },
      { label: '下载 .pkg', id: undefined, type: 'accent', href: '#mac' }
    ],
    details: {
      summary: '校验与签名',
      code: 'SHA256: aa01...99fa',
      note: 'Developer ID 签名与公证'
    }
  },
  {
    id: 'linux',
    title: 'Linux',
    subtitle: '.deb / .rpm / AppImage / tar.gz · APT/YUM 仓库',
    actions: [
      { label: '下载 .deb', id: 'dl-deb', type: 'primary', href: '#linux' },
      { label: '下载 .rpm', id: 'dl-rpm', type: 'accent', href: '#linux' }
    ],
    details: {
      summary: '仓库与校验',
      code: 'SHA256: f0c1...e21b',
      note: 'curl -fsSL https://example.com/linux.asc | sudo tee /etc/apt/keyrings/yunke.asc'
    }
  },
  {
    id: 'ios',
    title: 'iOS',
    subtitle: 'App Store / TestFlight',
    actions: [
      { label: 'App Store', id: undefined, type: 'primary', href: '#ios' },
      { label: 'TestFlight', id: undefined, type: 'accent', href: '#ios' }
    ],
    details: {
      summary: '企业分发说明',
      note: '遵循 Apple 企业分发政策，安装前请信任证书。'
    }
  },
  {
    id: 'android',
    title: 'Android',
    subtitle: 'Google Play / APK',
    actions: [
      { label: 'Google Play', id: undefined, type: 'primary', href: '#android' },
      { label: '下载 APK', id: 'dl-apk', type: 'accent', href: '#android' }
    ],
    details: {
      summary: '校验与签名',
      code: 'SHA256: bb22...cc33',
      note: ''
    }
  },
  {
    id: 'web',
    title: 'Web',
    subtitle: '浏览器直接访问',
    actions: [
      { label: '立即使用', id: undefined, type: 'primary', href: '#' }
    ]
  }
];

export const securityCards = [
  {
    title: '命令行校验',
    lines: ['Windows PowerShell：', 'Get-FileHash .\\installer.exe -Algorithm SHA256', 'macOS / Linux：', 'shasum -a 256 installer.dmg']
  },
  {
    title: '证书与发布者',
    lines: ['发布者：Yunke Inc. · 代码签名 · 时间戳服务 · 证书链可校验']
  },
  {
    title: '镜像与 CDN',
    lines: ['自动选择最近 CDN 节点，失败时切换镜像，保障下载稳定。']
  }
];

export const changelog = [
  {
    version: '稳定版 v1.12.0',
    items: ['新增：实时游标与批注', '优化：白板渲染性能提升 25%', '修复：离线模式偶发断线重连'],
    note: '发布于 2025-10-20'
  },
  {
    version: '预览版 v1.13.0-beta1',
    items: ['实验：AI 智能排版与一键对齐', '优化：多端同步稳定性'],
    note: '注意：预览版可能存在不稳定行为，仅用于测试。'
  }
];
