邮箱展示增量包(2026-09-13)
==============================

【本次改动】邮箱 sales@tarshome.com 展示(C 方案:页脚 + 首页 CTA + 商品详情页)

1. src/layouts/Layout.astro
   - frontmatter 新增 const email = 'sales@tarshome.com'
   - 页脚 Contact 区在 "WhatsApp Us" 下方新增邮箱链接 (mailto)

2. src/pages/index.astro
   - 首页工艺匠心区 (Craftsmanship) 新增 "Email Us" 按钮
   - 与 "Chat on WhatsApp" 按钮并排,白色风格一致

3. src/pages/products/[slug].astro
   - 商品详情页 WhatsApp 绿色按钮旁新增 "EMAIL US" 深色按钮

【部署步骤】
1. 解压覆盖本地项目对应路径(3 个文件)
2. npm run build 验证构建通过
3. git add + commit + push(Cloudflare Pages 自动部署)

【部署后验证】
1. 检查页面:首页底部 + 首页工艺匠心区 + 任一商品页应有邮箱按钮
2. 点击邮箱按钮应能调起邮件客户端,收件人为 sales@tarshome.com
3. 防爬虫验证(可选):
   curl -s https://tarshome.com/ | grep -i "cf_email\|data-cfemail"
   若出现 data-cfemail 加密节点即表示 Cloudflare 邮箱混淆已生效
   (无需配置,Email Obfuscation 默认开启)

【注意】
- 邮箱显示为纯文本 + mailto 链接,Cloudflare 会自动混淆,爬虫抓不到真实地址