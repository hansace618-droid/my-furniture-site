TARS HOME 商品增量包(0913 批次)
============================

【批次信息】
- 表格 118 行 → 111 个商品(6 组多图已合并: coatrack1705(3张)、coffeetable1629(2)、
  coffeetable2065(2)、diningchair1759(2)、magazinerack2209(2)、ornate-plant-pedesta1565(2))
- 与线上 293 个商品 ZERO 重复,纯增量,上线后 293 → 404 个商品
- title / description 全部翻译成英文,风格与全站一致(法式中国风 = Chinoiserie)
- 分类分布: Living Room 53 / Console&Hall 14 / Bedroom 13 / Home Decoration 13 / Study 11 / Dining Room 7
- 特殊处理:
  * ornate-plant-pedesta1565:原表两行重复 -2,已修正为主图 1565 + 附加图 1565-2(方案A)
  * coffeetable1800-2:原表只有附加图行(无 1800 主行),按独立单图商品处理,slug 保留 coffeetable1800-2
  * 拼写按原表保留: decoraitvepainting2023 / ornate-plant-pedesta* (勿改动,否则图片 404)

【操作步骤】
1. 解压覆盖到 C:\Users\24438\my-furniture-site (src/content/products/ 下 111 个 .md 新增)
2. 把 118 张商品图放进 public\images\products\
   → 文件名对照 IMAGES_需要放的照片清单.txt,一字不差(全小写+普通连字符)
3. 本地验证:  npm run build
   → 成功标志: 约 404 页、无红色报错
4. 推送:  git add . && git commit -m "feat: add 111 products (0913 batch)" && git push
5. 等 1-2 分钟 Cloudflare 自动部署

【验证】
部署后检查 https://tarshome.com/products/ 应显示约 404 个商品;
多图商品详情页可切换图片;搜索 "chinoiserie" 结果应更多。

【注意】
- 图片文件名字母大小写/连字符必须与清单完全一致,否则图片 404
- 这次新增了全新品类:衣帽架(Coat Rack)、壁炉(Fireplace Mantel)、穿衣镜(Full-Length Mirror)、
  装饰花架(Plant Pedestal)、家居摆件(Home Decor Ornament)、梳妆台(Vanity Table)
