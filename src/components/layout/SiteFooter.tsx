const footerLinks = [
  {
    title: '产品',
    items: [
      { label: '功能特性', href: '#features', disabled: false },
      { label: '产品详情', href: '/product', disabled: false },
      { label: '下载', href: '/download', disabled: false }
    ]
  },
  {
    title: '资源',
    items: [
      { label: '文档', href: '#docs', disabled: true },
      { label: 'API 文档', href: '#', disabled: true },
      { label: '开发者', href: '#', disabled: true }
    ]
  },
  {
    title: '公司',
    items: [
      { label: '关于我们', href: '#about', disabled: true },
      { label: '联系我们', href: '/contact', disabled: false },
      { label: '招聘', href: '#', disabled: true }
    ]
  },
  {
    title: '法律',
    items: [
      { label: '用户协议', href: '#', disabled: true },
      { label: '隐私政策', href: '#', disabled: true },
      { label: '开源许可', href: '#', disabled: true }
    ]
  }
];

const SiteFooter = () => {
  return (
    <footer role="contentinfo">
      <div className="container foot">
        <div>
          <div className="brand">云科白板</div>
          <p className="muted">© {new Date().getFullYear()} Yunke Inc. 保留所有权利</p>
        </div>
        <div className="links">
          {footerLinks.map(group => (
            <div className="link-group" key={group.title}>
              <h4>{group.title}</h4>
              {group.items.map(item => (
                <a
                  key={item.label}
                  href={item.disabled ? undefined : item.href}
                  className={item.disabled ? 'link-disabled' : undefined}
                  onClick={item.disabled ? e => e.preventDefault() : undefined}
                >
                  {item.label}
                  {item.disabled && <span className="link-line" aria-hidden="true"></span>}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
