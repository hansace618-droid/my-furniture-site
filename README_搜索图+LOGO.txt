TARS HOME 合并包:搜索结果图片修复 + 新LOGO(一次push)
================================================

【A. 搜索结果没图 - 修复】
原因: Pagefind 自动采集图片的规则是"取 <h1> 之后的第一张 <img>",
      但商品页主图在 <h1> 之前,所以索引里没有图片信息。
修复(双保险):
1. src/pages/products/[slug].astro
   -> 主图加 data-pagefind-meta="image[src]",重建后索引含图片
2. src/pages/search.astro
   -> 前端兜底:即使索引没图,也自动从 URL 推断
      /products/sofa123/ -> /images/products/sofa123.jpg
   -> 结果链接改为新标签打开

【B. 新 LOGO(4 张图,与搜索修复一起推)】
1. public/images/logo-header.png   -> 页头横版 LOGO(白字透明底,适配深色页头)
2. public/favicon.ico              -> 浏览器标签图标(16/32/48)
3. public/favicon.png              -> 64x64
4. public/apple-touch-icon.png     -> 手机主屏幕图标 180x180

【操作】
1. 解压覆盖到 C:\Users\24438\my-furniture-site(同名替换)
2. 本地验证: npm run build
   -> 应约 205 页、无红色报错
3. 推送: git add . && git commit -m "feat: search result images + new logo" && git push
4. 部署后检查:
   - https://tarshome.com/search/ 搜 "sofa" 应有图
   - 页头新 LOGO、浏览器标签新图标
