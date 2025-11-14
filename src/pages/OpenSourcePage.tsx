import { useEffect, useState } from 'react';

const repos = [
  {
    name: '前端 Web',
    stack: 'React · Vite · TypeScript',
    desc: '企业官网与面板前端，包含多端自适应、滚动叙事、平台下载页。',
    repo: 'zhenttang/baibanfront'
  },
  {
    name: 'Java 后端',
    stack: 'Spring Boot · MySQL · Redis',
    desc: '已经开源的核心协作服务，提供鉴权、文档存储、实时同步接口。',
    repo: 'zhenttang/baibanadmin'
  },
  {
    name: '实时协作引擎 (YJS)',
    stack: 'Yjs · WebSocket · CRDT',
    desc: '负责白板实时同步的 YJS 层，持续优化性能与离线体验。',
    repo: 'zhenttang/baibanYjs'
  }
];

const heroHighlights = [
  { title: '前端', desc: 'React · Vite · TypeScript' },
  { title: '后端', desc: 'Java · Spring Boot · MySQL' },
  { title: '实时引擎', desc: 'Yjs · CRDT · WebSocket' }
];

const OpenSourcePage = () => {
  const [stats, setStats] = useState<Record<string, { stars: number; forks: number }>>({});
  useEffect(() => {
    let cancelled = false;
    Promise.all(
      repos.map(async repo => {
        try {
          const res = await fetch(`https://api.github.com/repos/${repo.repo}`);
          if (!res.ok) return [repo.repo, null] as const;
          const data = await res.json();
          return [repo.repo, { stars: data.stargazers_count, forks: data.forks_count }] as const;
        } catch (err) {
          return [repo.repo, null] as const;
        }
      })
    ).then(entries => {
      if (cancelled) return;
      const next: Record<string, { stars: number; forks: number }> = {};
      entries.forEach(([key, value]) => {
        if (value) next[key] = value;
      });
      setStats(next);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="page-opensource">
      <main className="hero hero-product" role="main">
        <div className="container hero-grid minimal">
          <div className="hero-content">
            <div className="kicker">FOR LOVE</div>
            <h1 className="love-headline">
              为爱发电<span>让协作更闪耀</span>
            </h1>
            <p className="love-sub">
              Write · Share · Spark。云科白板向社区开放核心能力，邀请每一位热爱协作工具的开发者一起雕琢体验：写代码、补文档、 share
              best practice，或仅仅是提一个想法——都算数。
            </p>
            <div className="love-highlights">
              {heroHighlights.map(item => (
                <div className="love-chip" key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card" aria-label="开源声明">
            <div className="item">
              <span>目前开源</span>
              <strong>Java 后端</strong>
            </div>
            <div className="item">
              <span>License</span>
              <strong>Apache 2.0</strong>
            </div>
            <div className="item">
              <span>贡献指南</span>
              <strong>README / CONTRIBUTING</strong>
            </div>
          </div>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <h2>GitHub 项目</h2>
          <p className="muted">浏览仓库，提交 Issue / PR，一起把云科白板打造成更强大的协作工具。</p>
          <div className="cols cards-snap">
            {repos.map(repo => (
              <article className="panel" key={repo.name}>
                <span className="panel-label">{repo.stack}</span>
                <header>
                  <h3>{repo.name}</h3>
                </header>
                <p className="muted">{repo.desc}</p>
                {stats[repo.repo] && (
                  <p className="muted" style={{ fontSize: '0.9rem' }}>
                    ⭐ {stats[repo.repo].stars} · 🍴 {stats[repo.repo].forks}
                  </p>
                )}
                <a
                  className="btn btn-primary"
                  href={`https://github.com/${repo.repo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  前往 GitHub
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>如何参与</h2>
          <div className="cols cards-snap">
            <article className="panel">
              <h3>提交 Issue</h3>
              <p className="muted">反馈 bug、提出新特性或分享使用体验。我们会在 48 小时内回复。</p>
            </article>
            <article className="panel">
              <h3>贡献代码</h3>
              <p className="muted">参考 CONTRIBUTING 流程 Fork → 开发 → PR，维护者会协助 Code Review。</p>
            </article>
            <article className="panel">
              <h3>撰写文档</h3>
              <p className="muted">补充教程、案例、最佳实践，帮助更多团队快速上手。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>点亮你的贡献</h2>
          <p className="section-subtitle">star / watch 仓库，和我们一起迭代云科白板。</p>
          <div className="row hero-actions">
            <a className="btn btn-primary btn-large" href="https://github.com/zhenttang/baibanadmin" target="_blank" rel="noreferrer">
              浏览 GitHub
            </a>
            <a className="btn btn-accent btn-large" href="/contact">
              合作 & 赞助
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpenSourcePage;
