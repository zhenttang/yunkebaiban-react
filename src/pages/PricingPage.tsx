import { useState } from 'react';
import { faqs, plans, comparisonRows } from '../data/pricing';

const PricingPage = () => {
  const [term, setTerm] = useState<'month' | 'year'>('month');

  return (
    <div className="page-pricing">
      <main className="hero hero-pricing" role="main">
        <div className="container hero-grid minimal">
          <div className="hero-content">
            <div className="kicker">PRICING</div>
            <h1>选择适合您的方案</h1>
            <p className="sub">从免费版到企业版，满足不同规模团队的需求</p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-large" href="#plans">立即试用</a>
              <a className="btn btn-accent btn-large" href="#contact">联系顾问</a>
            </div>
          </div>
          <div className="hero-card" aria-label="套餐要点">
            <div className="item">
              <span>团队规模</span>
              <strong>1-∞</strong>
            </div>
            <div className="item">
              <span>计费周期</span>
              <strong>月 / 年</strong>
            </div>
            <div className="item">
              <span>升级灵活</span>
              <strong>随时</strong>
            </div>
          </div>
        </div>
      </main>

      <section id="plans" className="section section-pricing">
        <div className="container">
          <div className="plan-toggle" role="group" aria-label="计费周期">
            <button
              className={term === 'month' ? 'is-active' : ''}
              onClick={() => setTerm('month')}
            >
              按月
            </button>
            <button
              className={term === 'year' ? 'is-active' : ''}
              onClick={() => setTerm('year')}
            >
              按年（省 10%）
            </button>
          </div>
          <div className="pricing-grid cards-snap">
            {plans.map(plan => (
              <article className={`pricing-card ${plan.featured ? 'pricing-featured' : ''}`} key={plan.name}>
                {plan.featured && <div className="pricing-badge">推荐</div>}
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <div className="pricing-price">
                    <span className="price-amount">
                      {plan.amount[term]}
                    </span>
                    <span className="price-period">
                      {plan.period[term]}
                    </span>
                  </div>
                  <p className="muted">{plan.description}</p>
                </div>
                <div className="pricing-features">
                  <ul>
                    {plan.features.map(item => (
                      <li key={item}>
                        <svg className="icon icon-sm">
                          <use href="#icon-check"></use>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-cta">
                  <a href="#" className={`btn ${plan.featured ? 'btn-accent' : 'btn-primary'} btn-block`}>
                    {plan.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt section-comparison">
        <div className="container">
          <h2>功能对比</h2>
          <div className="table-wrap">
            <table className="table comparison-table">
              <thead>
                <tr>
                  <th>功能</th>
                  <th>免费版</th>
                  <th>专业版</th>
                  <th>企业版</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(row => (
                  <tr key={row.label}>
                    <td>
                      <strong>{row.label}</strong>
                    </td>
                    {row.values.map((value, idx) => (
                      <td key={`${row.label}-${idx}`}>
                        {value === '✓' ? (
                          <svg className="icon icon-sm">
                            <use href="#icon-check"></use>
                          </svg>
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-faq">
        <div className="container">
          <h2>常见问题</h2>
          <div className="faq-list">
            {faqs.map(item => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section cta-section">
        <div className="container">
          <h2>开始使用云科白板</h2>
          <p className="section-subtitle">选择适合您的方案，立即开始协作</p>
          <div className="row hero-actions">
            <a className="btn btn-primary btn-large" href="#">免费试用</a>
            <a className="btn btn-accent btn-large" href="#">联系销售</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
