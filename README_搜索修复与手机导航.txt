TARS HOME 增量包:搜索修复 + 手机端导航(一次 push)
====================================================

【本次 8 个文件:搜索修复 + 手机导航,一次性搞定】

一、搜索修复(Pagefind 索引此前一直没生成,搜索框无结果)
----------------------------------------------------
改动:
1. package.json  + package-lock.json
   -> pagefind 从 devDependencies 移到 dependencies(Cloudflare 生产构建
      默认不装 devDependencies,这是索引没生成的原因之一)
   -> package-lock.json 已用官方源重新生成(295 包,与 package.json 完全同步)
2. astro.config.mjs
   -> 注册了新的 Pagefind 集成
3. src/integrations/pagefind.mjs (新文件)
   -> Astro 构建钩子:每次 npm run build 结束时必然生成搜索索引
      (以前靠 postbuild 脚本,Cloudflare 构建命令不同就没跑)
4. scripts/postbuild.mjs 保持不变(双保险,照旧跑,无害)

二、手机端导航(对标站式:三横线菜单 + 中间 logo + 右侧 WhatsApp)
------------------------------------------------------------
改动:
5. src/layouts/Layout.astro
   -> 新增手机导航区(≤768px 生效):
      左:三横线按钮(点击展开下拉分类菜单)
      中:logo
      右:绿色 WhatsApp 圆形按钮(点击直接聊天)
      下拉菜单:Home / Products / 6 个分类 / Search
6. public/styles/global.css
   -> 手机导航样式;电脑端导航完全不变

【操作步骤】
1. 解压本 zip 到项目根目录 C:\Users\24438\my-furniture-site
   -> 同名文件全部选"替换"
2. 本地验证(强烈建议):
   cd C:\Users\24438\my-furniture-site
   npm run build
   -> 应约 205 页、无红色报错
   -> 成功标志:日志里有 Pagefind 构建输出,dist\pagefind\ 文件夹出现
3. 推送上线:
   git add .
   git commit -m "feat: fix pagefind search + mobile nav with whatsapp"
   git push
   -> 等 1-2 分钟 Cloudflare 部署

【部署后检查】
1. 电脑端打开 https://tarshome.com/search/
   -> 输入 "sofa" 应出现搜索结果(此前是空的)
2. 手机打开 https://tarshome.com/
   -> 左上三横线点开有分类菜单、中间 logo、右侧绿色 WhatsApp 按钮
   -> 点 WhatsApp 应打开聊天窗口

【注意】
- 若 Cloudflare 面板 Build command 不是 npm run build,建议改成:
  npm run build
  (Workers & Pages -> tarshome -> Settings -> Builds & deployments)
- 本包不含任何商品数据改动,不影响现有 204 个商品
