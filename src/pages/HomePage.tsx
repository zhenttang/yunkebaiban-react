import { useMemo } from 'react';
import {
  coreFeatures,
  heroMetrics,
  platformCards,
  solutionCards,
  statsHighlight,
  storySteps,
  technologyBlocks,
  trustLogos
} from '../data/home';
import { useStorySteps } from '../hooks/useStorySteps';
import LazySection from '../components/common/LazySection';

const HomePage = () => {
  const { activeIndex, setNode } = useStorySteps(storySteps.length);
  const activeStory = useMemo(() => storySteps[activeIndex], [activeIndex]);

  return (
    <div className="page-home">
      <section className="hero hero-home" role="main">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="kicker">ENTERPRISE WHITEBOARD</div>
            <h1>更快更稳的企业级白板</h1>
            <p className="sub">基于 YJS CRDT 技术，支持多平台实时协作，让团队协作更高效</p>
            <div className="row hero-actions">
              <a className="btn btn-primary btn-large" href="/download">立即下载</a>
              <a className="btn btn-accent btn-large" href="#demo">观看演示</a>
            </div>
            <div className="hero-badges">
              <span className="badge">免费试用</span>
              <span className="badge">无需信用卡</span>
              <span className="badge">5 分钟快速上手</span>
            </div>
            <div className="hero-metrics">
              {heroMetrics.map(metric => (
                <div className="metric" key={metric.label}>
                  <label>{metric.label}</label>
                  <strong>{metric.value}</strong>
                  <p className="muted">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-preview" aria-hidden="true">
            <div className="preview-window">
              <div className="preview-header">
                <span></span>
                <span></span>
                <span></span>
                <strong>Team Sprint</strong>
              </div>
              <div className="preview-body">
                <div className="preview-note accent">
                  OKR 冲刺
                  <small>AI 团队正在同步</small>
                </div>
                <div className="preview-note neutral">
                  设计评审
                  <small>修改 2 分钟前</small>
                </div>
                <div className="preview-progress">
                  <div className="label">同步稳定性</div>
                  <div className="bar"><span style={{ width: '92%' }}></span></div>
                </div>
                <div className="preview-users">
                  {['LD', 'PM', 'UX', 'FE'].map(user => (
                    <div className="user" key={user}>{user}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hero-floating latency">
              <span>实时延迟</span>
              <strong>45 ms</strong>
            </div>
            <div className="hero-floating offline">
              <span>离线编辑</span>
              <strong>自动同步</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-pill trust-marquee" aria-label="合作客户">
        <div className="container">
          <div className="kicker">TRUSTED TEAMS</div>
          <p className="muted">120+ 企业在用云科白板协同全年项目</p>
          <div className="marquee" role="presentation">
            <div className="marquee-track">
              {trustLogos.concat(trustLogos).map((logo, idx) => (
                <span className="logo-pill" key={`${logo}-${idx}`}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section" aria-label="核心特性">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">CORE FEATURES</span>
              <h2>为什么选择云科白板</h2>
              <p className="muted section-subtitle">可靠的同步内核、跨端体验和企业级安全把复杂协作变成轻松操作。</p>
            </div>
            <div className="section-divider" aria-hidden="true"></div>
          </div>
          <div className="cols cards-snap">
            {coreFeatures.map(feature => (
              <article className="panel card-feature" key={feature.title}>
                <span className="panel-label">{feature.label}</span>
                <header>
                  <div className="feature-icon">
                    <svg className="icon icon-xl">
                      <use href={feature.icon}></use>
                    </svg>
                  </div>
                  <h3>{feature.title}</h3>
                </header>
                <p className="muted">{feature.body}</p>
                <ul className="feature-list">
                  {feature.bullets.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LazySection className="section section-highlight" aria-label="实时指标">
        <div className="container">
          <div className="stat-grid">
            {statsHighlight.map(stat => (
              <article className="stat-card" key={stat.title}>
                <small>{stat.title}</small>
                <strong>{stat.value}</strong>
                <p className="muted">{stat.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </LazySection>

      <section className="section section-scroll" aria-label="协作流程体验">
        <div className="container story-grid">
          <div className="story-column">
            <span className="section-label">COLLAB FLOW</span>
            <h2>滚动浏览，体验完整协作节奏</h2>
            <p className="muted">跟随滚动，观察云科白板如何从启动、协作、同步到沉淀，逐步推动项目完成。</p>
            <div className="story-active">
              <small>当前阶段</small>
              <h3 id="story-active-title">{activeStory.activeTitle}</h3>
              <p id="story-active-desc">{activeStory.activeDesc}</p>
            </div>
          </div>
          <div className="story-steps">
            {storySteps.map((step, idx) => (
              <article
                className={`story-step ${idx === activeIndex ? 'is-active' : ''}`}
                key={step.title}
                ref={setNode(idx)}
              >
                <div className="step-indicator">{step.indicator}</div>
                <h3>{step.title}</h3>
                <p className="muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="section section-alt" aria-label="使用场景">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">USE CASES</span>
              <h2>适用场景</h2>
              <p className="muted section-subtitle">覆盖团队协作、知识沉淀、培训教育等核心流程，快速套用模板，精准复用经验。</p>
            </div>
            <div className="section-divider" aria-hidden="true"></div>
          </div>
          <div className="cols cards-snap">
            {solutionCards.map(card => (
              <article className="panel" key={card.title}>
                <span className="panel-label">{card.label}</span>
                <header>
                  <h3>{card.title}</h3>
                </header>
                <p className="muted">{card.desc}</p>
                <ul>
                  {card.bullets.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="section" aria-label="技术优势">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">TECH STACK</span>
              <h2>技术优势</h2>
              <p className="muted section-subtitle">自研同步内核 + 渲染引擎 + 安全体系，保障跨区域协作体验。</p>
            </div>
            <div className="section-divider" aria-hidden="true"></div>
          </div>
          <div className="cols cards-snap">
            {technologyBlocks.map(block => (
              <article className="panel" key={block.title}>
                <span className="panel-label">{block.label}</span>
                <header>
                  <h3>{block.title}</h3>
                </header>
                <p className="muted">{block.desc}</p>
                <p>
                  <code className="code">{block.code}</code>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LazySection id="platforms" className="section section-alt" aria-label="平台支持">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">PLATFORMS</span>
              <h2>全平台支持</h2>
              <p className="section-subtitle muted">一套白板，多端同步，随时随地协作。</p>
            </div>
            <div className="section-divider" aria-hidden="true"></div>
          </div>
          <div className="cols platform-grid cards-snap">
            {platformCards.map(card => (
              <article className="panel" key={card.title}>
                <span className="platform-tag">{card.tag}</span>
                <header>
                  <h3>{card.title}</h3>
                </header>
                <p className="muted">{card.desc}</p>
                <a className="btn btn-primary" href={card.link}>
                  {card.tag === 'Web' ? '立即使用' : '下载'}
                </a>
              </article>
            ))}
          </div>
        </div>
      </LazySection>

      <section className="section cta-section" aria-label="行动号召">
        <div className="container">
          <h2>开始使用云科白板</h2>
          <p className="section-subtitle">免费试用，无需信用卡，5 分钟快速上手</p>
          <div className="row hero-actions">
            <a className="btn btn-primary btn-large" href="/download">立即下载</a>
            <a className="btn btn-accent btn-large" href="#">免费试用</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
