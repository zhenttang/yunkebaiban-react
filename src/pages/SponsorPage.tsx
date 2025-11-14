import { useState } from 'react';

const tiers = [
  { name: '星火伙伴', desc: '一次性赞助 ¥199，获得开源赞助名单展示。' },
  { name: '银河伙伴', desc: '年度赞助 ¥1999，享受私享路线图与协作群。' },
  { name: '超新星伙伴', desc: '定制赞助，联合共建功能，与我们一起迭代。' }
];

const SponsorPage = () => {
  const [message, setMessage] = useState('');

  const handleSupport = () => {
    setMessage('感谢你的支持！我们会把温暖与能量投入到每一次迭代中 ❤️');
    setTimeout(() => setMessage(''), 4000);
  };

  return (
    <div className="page-sponsor">
      <main className="hero hero-pricing" role="main">
        <div className="container hero-grid minimal">
          <div className="hero-content">
            <div className="kicker">SPONSORSHIP</div>
            <h1>赞助，为爱加电</h1>
            <p className="sub">若云科白板对你有所帮助，欢迎用真实的能量支持我们的开源旅程。</p>
            <div className="hero-badges">
              <span className="badge">无限感谢</span>
              <span className="badge">可开发票</span>
              <span className="badge">透明使用</span>
            </div>
          </div>
          <div className="hero-card" aria-label="赞助提示">
            <div className="item">
              <span>使用方向</span>
              <strong>服务器 / 设计 / 社区</strong>
            </div>
            <div className="item">
              <span>反馈周期</span>
              <strong>48 小时内</strong>
            </div>
            <div className="item">
              <span>感谢墙</span>
              <strong>永久展示</strong>
            </div>
          </div>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <h2>赞助梯度</h2>
          <div className="cols cards-snap">
            {tiers.map(tier => (
              <article className="panel" key={tier.name}>
                <h3>{tier.name}</h3>
                <p className="muted">{tier.desc}</p>
                <button className="btn btn-primary" onClick={handleSupport}>我要支持</button>
              </article>
            ))}
          </div>
          {message && <div className="sponsor-toast">{message}</div>}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>我们承诺</h2>
          <div className="cols cards-snap">
            <article className="panel">
              <h3>透明</h3>
              <p className="muted">所有赞助款项会定期在 GitHub 公告，公开流向、使用和进展。</p>
            </article>
            <article className="panel">
              <h3>感谢</h3>
              <p className="muted">赞助者将进入感谢墙，获得优先体验与反馈通道。</p>
            </article>
            <article className="panel">
              <h3>共建</h3>
              <p className="muted">我们提供专属协作空间，与您一起讨论想法和功能路线图。</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorPage;
