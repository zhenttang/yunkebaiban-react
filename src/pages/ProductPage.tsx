import { featureBlocks, heroStats, matrixSections, mobileFeatureTabs } from '../data/product';

const ProductPage = () => {
  return (
    <div className="page-product">
      <main className="hero hero-product" role="main">
        <div className="container hero-grid minimal">
          <div className="hero-content">
            <div className="kicker">PRODUCT FEATURES</div>
            <h1>强大功能，助力团队协作</h1>
            <p className="sub">深入了解云科白板的核心能力，发现提升团队效率的无限可能</p>
            <div className="hero-badges">
              <span className="badge">YJS CRDT</span>
              <span className="badge">全平台同步</span>
              <span className="badge">Canvas 渲染</span>
            </div>
          </div>
          <div className="hero-card" aria-label="能力速览">
            {heroStats.map(stat => (
              <div className="item" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="section mobile-only section-feature-mobile">
        <div className="container">
          <span className="section-label">FEATURE SNAP</span>
          <div className="feature-tabs">
            {mobileFeatureTabs.map(tab => (
              <article className="feature-tab" key={tab.title}>
                <h3>{tab.title}</h3>
                <p className="muted">{tab.desc}</p>
                <ul>
                  {tab.bullets.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-feature-alt desktop-only">
        <div className="container">
          {featureBlocks.map(block => (
            <article
              className={`feature-block ${block.align === 'right' ? 'feature-right' : 'feature-left'}`}
              key={block.title}
            >
              {block.align === 'right' ? null : (
                <div className="feature-visual">
                  <div className="feature-image-placeholder">
                    <svg className="icon icon-xl" style={{ opacity: 0.3 }}>
                      <use href={block.icon}></use>
                    </svg>
                  </div>
                </div>
              )}
              <div className="feature-content">
                <div className="feature-number">{block.number}</div>
                <h2>{block.title}</h2>
                <p className="muted">{block.desc}</p>
                <ul className="feature-detail-list">
                  {block.bullets.map(bullet => (
                    <li key={bullet}>
                      <svg className="icon icon-sm">
                        <use href="#icon-check"></use>
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              {block.align === 'right' ? (
                <div className="feature-visual">
                  <div className="feature-image-placeholder">
                    <svg className="icon icon-xl" style={{ opacity: 0.3 }}>
                      <use href={block.icon}></use>
                    </svg>
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section section-matrix">
        <div className="container">
          <h2>完整功能矩阵</h2>
          <div className="matrix-grid cards-snap">
            {matrixSections.map(section => (
              <div className="matrix-item" key={section.title}>
                <h4>{section.title}</h4>
                <ul>
                  {section.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>立即体验云科白板</h2>
          <p className="section-subtitle">免费试用，无需信用卡</p>
          <div className="row hero-actions">
            <a className="btn btn-primary btn-large" href="/download">立即下载</a>
            <a className="btn btn-accent btn-large" href="#">免费试用</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
