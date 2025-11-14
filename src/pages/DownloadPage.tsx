import { useEffect, useMemo, useState } from 'react';
import { changelog, platformCards, securityCards } from '../data/download';

type OS = 'win' | 'mac' | 'linux' | 'ios' | 'android';

const detectOS = (): { os: OS; arch?: string } => {
  if (typeof navigator === 'undefined') return { os: 'linux' };
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  const platform = navigator.platform || '';
  if (/iPhone|iPad|iPod/.test(ua)) return { os: 'ios' };
  if (/Android/.test(ua)) return { os: 'android' };
  if (/Mac/.test(platform) || /Mac OS X/.test(ua)) return { os: 'mac' };
  if (/Win/.test(platform) || /Windows/.test(ua)) {
    return { os: 'win', arch: ua.includes('ARM') ? 'arm64' : 'x64' };
  }
  return { os: 'linux' };
};

const DownloadPage = () => {
  const [detected, setDetected] = useState<{ os: OS; arch?: string }>(() => detectOS());

  useEffect(() => {
    setDetected(detectOS());
  }, []);

  const heroCTA = useMemo(() => {
    const map: Record<OS, { label: string; href: string }> = {
      win: { label: `下载适用于 Windows（${detected.arch || 'x64'}）`, href: '#win' },
      mac: { label: '下载适用于 macOS', href: '#mac' },
      linux: { label: '下载适用于 Linux', href: '#linux' },
      ios: { label: '前往 App Store', href: '#ios' },
      android: { label: '前往 Google Play', href: '#android' }
    };
    return map[detected.os];
  }, [detected]);

  const mobileReco = useMemo(() => {
    const map: Record<OS, { title: string; desc: string; primary: { label: string; href: string }; secondary: { label: string; href: string } }> = {
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

  return (
    <div className="page-download">
      <main id="download" className="hero" role="main">
        <div className="container hero-grid minimal">
          <div className="hero-content">
            <div className="kicker">DOWNLOAD</div>
            <h1>更快更稳的企业级白板</h1>
            <p className="sub">一键安装，与团队即刻协作</p>
            <div className="hero-actions">
            <a id="primary-cta" className="btn btn-primary btn-large" href={heroCTA.href}>
              {heroCTA.label}
            </a>
              <a className="btn btn-accent btn-large" href="#all-platforms">所有平台与版本</a>
            </div>
          </div>
          <div className="hero-card" aria-label="下载状态">
            <div className="item">
              <span>当前稳定版</span>
              <strong>v1.12.0</strong>
            </div>
            <div className="item">
              <span>预览版</span>
              <strong>v1.13.0</strong>
            </div>
            <div className="item">
              <span>检测平台</span>
              <strong>自动</strong>
            </div>
          </div>
        </div>
      </main>

      <section className="section mobile-only" aria-label="快捷下载">
        <div className="container">
          <div className="mobile-reco">
            <h2 id="reco-title">{mobileReco.title}</h2>
            <p className="muted" id="reco-desc">{mobileReco.desc}</p>
            <div className="reco-actions">
              <a className="btn btn-primary" id="reco-primary" href={mobileReco.primary.href}>
                {mobileReco.primary.label}
              </a>
              <a className="btn btn-accent" id="reco-secondary" href={mobileReco.secondary.href}>
                {mobileReco.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="all-platforms" className="section" aria-label="所有平台">
        <div className="container">
          <h2>所有平台</h2>
          <div className="cols cards-snap" role="list">
            {platformCards.map(card => (
              <article className="panel" role="listitem" id={card.id} key={card.id}>
                <header>
                  <h3>{card.title}</h3>
                </header>
                <p className="muted">{card.subtitle}</p>
                <div className="platform-actions">
                  {card.actions.map(action => (
                    <a
                      key={action.label}
                      className={`btn ${action.type === 'accent' ? 'btn-accent' : 'btn-primary'}`}
                      id={action.id}
                      href={action.href || '#'}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
                {card.details && (
                  <details>
                    <summary>{card.details.summary}</summary>
                    <div className="row" style={{ justifyContent: 'flex-start' }}>
                      {card.details.code && <code className="code" data-copy={card.details.code}>{card.details.code}</code>}
                    </div>
                    {card.details.note && <p className="muted">{card.details.note}</p>}
                  </details>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="section section-alt" aria-label="安全与校验">
        <div className="container">
          <h2>安全与校验</h2>
          <div className="cols">
            {securityCards.map(card => (
              <article className="panel" key={card.title}>
                <header>
                  <h3>{card.title}</h3>
                </header>
                {card.lines.map((line, idx) => (
                  <p key={`${card.title}-${idx}`}>{line}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="changelog" className="section" aria-label="版本与更新日志">
        <div className="container">
          <h2>版本与更新日志</h2>
          <div className="cols">
            {changelog.map(log => (
              <article className="panel" key={log.version}>
                <header>
                  <h3>{log.version}</h3>
                </header>
                <ul>
                  {log.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="muted">{log.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>开始使用云科白板</h2>
          <p className="section-subtitle">免费试用，无需信用卡，5 分钟快速上手</p>
          <div className="row hero-actions">
            <a className="btn btn-primary btn-large" href="#all-platforms">选择版本</a>
            <a className="btn btn-accent btn-large" href="/pricing">咨询方案</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
