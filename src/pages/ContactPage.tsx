const ContactPage = () => {
  return (
    <div className="page-contact">
      <main className="hero hero-solutions" role="main">
        <div className="container hero-grid minimal">
          <div className="hero-content">
            <div className="kicker">CONTACT</div>
            <h1>联系我们</h1>
            <p className="sub">企业合作、定制方案、私有部署等需求，欢迎与我们沟通</p>
          </div>
          <div className="hero-card" aria-label="联系渠道">
            <div className="item">
              <span>邮箱</span>
              <strong>hello@yunke.com</strong>
            </div>
            <div className="item">
              <span>电话</span>
              <strong>+86 010-1234 5678</strong>
            </div>
            <div className="item">
              <span>工作日</span>
              <strong>09:00 - 19:00</strong>
            </div>
          </div>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <h2>提交需求</h2>
          <p className="muted">留下您的联系方式，我们会在 24 小时内与您联系。</p>
          <form className="contact-form">
            <div className="row" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <input className="contact-input" placeholder="姓名" required />
              <input className="contact-input" placeholder="公司" />
            </div>
            <div className="row" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <input className="contact-input" placeholder="邮箱" type="email" required />
              <input className="contact-input" placeholder="电话" />
            </div>
            <textarea className="contact-input" placeholder="需求描述" rows={4} required></textarea>
            <button type="submit" className="btn btn-primary btn-large" disabled>
              暂未开放提交
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
