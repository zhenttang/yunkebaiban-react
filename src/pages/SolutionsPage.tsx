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
  return (
    <div className="page-solutions">
      <main className="hero hero-solutions" role="main">
        <div className="container hero-grid minimal">
          <div className="hero-content">
            <div className="kicker">SOLUTIONS</div>
            <h1>为不同场景提供解决方案</h1>
            <p className="sub">无论团队规模与行业类型，云科白板都能快速适配，提供专属协作方案</p>
            <div className="hero-badges">
              <span className="badge">100+ 场景</span>
              <span className="badge">私有化部署</span>
              <span className="badge">企业支持</span>
            </div>
          </div>
          <div className="hero-card" aria-label="热门行业需求">
            <div className="item">
              <span>远程协作</span>
              <strong>70%</strong>
            </div>
            <div className="item">
              <span>知识沉淀</span>
              <strong>45%</strong>
            </div>
            <div className="item">
              <span>培训教育</span>
              <strong>30%</strong>
            </div>
          </div>
        </div>
      </main>

      <section className="section section-timeline">
        <div className="container">
          <h2>适用场景</h2>
          <div className="timeline desktop-only">
            {solutionsTimeline.map(item => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker">
                  <svg className="icon icon-lg">
                    <use href={item.icon}></use>
                  </svg>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p className="muted">{item.text}</p>
                  <div className="solution-features">
                    {item.features.map(feature => (
                      <div className="solution-feature" key={feature.title}>
                        <strong>{feature.title}</strong>
                        <p>{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="btn btn-accent">
                    了解更多
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="solution-mobile mobile-only">
            {solutionCards.map(card => (
              <article className="solution-card" key={card.title}>
                <h3>{card.title}</h3>
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

      <section className="section section-alt section-process">
        <div className="container">
          <h2>企业部署流程</h2>
          <div className="process-steps">
            {[
              { title: '咨询评估', desc: '了解需求，评估部署方案' },
              { title: '环境准备', desc: '配置服务器环境，准备部署资源' },
              { title: '部署实施', desc: '安装配置，数据迁移，系统测试' },
              { title: '培训上线', desc: '用户培训，正式上线，持续支持' }
            ].map((step, idx) => (
              <div className="process-step" key={step.title}>
                <div className="step-number">{idx + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>开始使用云科白板</h2>
          <p className="section-subtitle">联系我们，获取定制化解决方案</p>
          <div className="row hero-actions">
            <a className="btn btn-primary btn-large" href="#">联系销售</a>
            <a className="btn btn-accent btn-large" href="/product">了解产品</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
