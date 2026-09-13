邮箱展示增量包 v2 - JS 混淆版(2026-09-13)
===========================================

【背景】
Cloudflare Pages 不应用自带的 Email Obfuscation(实测开关 On 但混淆不生效,
官方文档:Worker 提供的 HTML 不混淆)。因此改用前端 JS 拼装方案——
爬虫抓 HTML 源码只能看到 sales 和 tarshome.com 两段碎片,抓不到完整邮箱。

【本次改动】邮箱 sales@tarshome.com(页脚 + 首页 CTA + 商品详情页)

1. src/layouts/Layout.astro
   - 删除 email 变量
   - 页脚 Contact 区:邮箱链接改为 data-mail-user="sales" data-mail-host="tarshome.com"
   - 底部 script 新增拼装逻辑:页面加载时拼出 mailto 链接并填入链接文本,显示 sales@tarshome.com
   - 页脚链接初始显示 "Email Us",JS 执行后才显示完整邮箱

2. src/pages/index.astro
   - 首页工艺匠心区 "Email Us" 按钮:mailto 改为 data 属性拼接(data-mail-text="false" 保持按钮文本)

3. src/pages/products/[slug].astro
   - 商品详情页 "EMAIL US" 按钮:同样改为 data 属性拼接

【部署步骤】
1. 解压覆盖本地项目对应路径(3 个文件)
2. npm run build 验证构建通过
3. git add + commit + push(Cloudflare Pages 自动部署)

【部署后验证】(可直接告诉我,我来查)
1. 页面显示正常:首页底部/工艺匠心区/商品详情页有邮箱按钮,点击可调起邮件客户端
2. 源码里没有完整 sales@tarshome.com 字符串(仅 data-mail-user/data-mail-host 两段)

【说明】
- 此方案不依赖 Cloudflare 任何开关,必定生效
- 与 Cloudflare 邮箱混淆同等级:普通爬虫(不执行 JS)抓不到完整地址
- 访客无感知:JS 在页面加载时即时拼装,点击行为与普通 mailto 完全一致