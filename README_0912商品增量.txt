TARS HOME 商品增量包(0912 批次)
============================

【批次信息】
- 表格 100 行 → 89 个商品(8 组多图已合并为单商品多图画廊)
- 与线上 204 个商品 ZERO 重复,纯增量,上线后 204 → 293 个商品
- title / description 全部翻译成英文,风格与线上完全一致
- 分类分布: Living Room 53 / Dining Room 13 / Console & Hall 11 / Study 6 / Home Decoration 4 / Bedroom 2
- 多图商品 8 个: accentcabinet0194(2张)、accentcabinet1497(2张)、diningchair1850(2张)、
  diningchair1862(2张)、magazinerack1784(2张)、magazinerack2059(3张)、sofa1893(2张)、writingdesk1319(4张)

【操作步骤】
1. 解压覆盖到 C:\Users\24438\my-furniture-site (src/content/products/ 下的 89 个 .md 同名新增)
2. 把 100 张商品图放进 public\images\products\
   → 文件名对照 IMAGES_需要放的照片清单.txt,一字不差(全小写+普通连字符)
3. 本地验证:  npm run build
   → 成功标志: 约 293 页、无红色报错
4. 推送:  git add . && git commit -m "feat: add 89 products (0912 batch)" && git push
5. 等 1-2 分钟 Cloudflare 自动部署

【验证】
部署后检查 https://tarshome.com/products/ 应显示约 293 个商品;
多图商品详情页可切换图片。

【注意】
- 图片文件名字母大小写/连字符必须与清单完全一致,否则图片 404
- 若本地还有 favicon 黑白包(上次解压未推送)+ 搜索图/手机导航等未 push,可一起 git add 提交
