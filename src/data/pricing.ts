export const plans = [
  {
    name: '免费版',
    amount: { month: '¥0', year: '¥0' },
    period: { month: '/月', year: '/年' },
    description: '适合个人用户和小团队',
    features: ['最多 5 个白板', '最多 3 人协作', '基础编辑功能', '云端存储 1GB', '社区支持'],
    cta: '立即开始',
    featured: false
  },
  {
    name: '专业版',
    amount: { month: '¥99', year: '¥89' },
    period: { month: '/月 /人', year: '/年 /人' },
    description: '适合中小企业团队',
    features: ['无限白板', '最多 20 人协作', '全部编辑功能', '云端存储 100GB', '版本历史', '优先支持'],
    cta: '开始试用',
    featured: true
  },
  {
    name: '企业版',
    amount: { month: '定制', year: '定制' },
    period: { month: '', year: '' },
    description: '适合大型企业和组织',
    features: ['无限白板', '无限协作人数', '全部功能', '无限存储', '私有化部署', '专属支持', '定制开发'],
    cta: '联系销售',
    featured: false
  }
];

export const comparisonRows = [
  { label: '白板数量', values: ['5 个', '无限', '无限'] },
  { label: '协作人数', values: ['3 人', '20 人', '无限'] },
  { label: '存储空间', values: ['1GB', '100GB', '无限'] },
  { label: '版本历史', values: ['—', '✓', '✓'] },
  { label: 'API 访问', values: ['—', '✓', '✓'] },
  { label: '私有化部署', values: ['—', '—', '✓'] },
  { label: '技术支持', values: ['社区', '优先', '专属'] }
];

export const faqs = [
  {
    question: '可以随时升级或降级套餐吗？',
    answer: '可以。您可以随时在账户设置中升级或降级套餐，变更将在下个计费周期生效。'
  },
  {
    question: '免费版有使用限制吗？',
    answer: '免费版适合个人用户和小团队，包含基础功能。如需更多功能，可以升级到专业版。'
  },
  {
    question: '企业版支持私有化部署吗？',
    answer: '是的。企业版支持完全私有化部署，数据完全由您掌控，符合严格的合规要求。'
  },
  {
    question: '支持哪些支付方式？',
    answer: '我们支持信用卡、支付宝、微信支付等多种支付方式。企业版也支持银行转账。'
  }
];
