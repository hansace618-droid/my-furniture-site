TARS HOME 增量商品包(0911 表格 -> 39 个新商品)
========================================

【本次是纯增量,不用删任何旧文件】

1. 解压本 zip 到项目根目录 C:\Users\24438\my-furniture-site
   -> 同名文件全部选"替换"
   -> 新增 39 个 .md 到 src\content\products\(线上已有 165 个不受影响)

2. 放 39 张主图 + 18 张附加图到 C:\Users\24438\my-furniture-site\public\images\products\
   -> 文件名必须与表格 image 列一字不差(全小写 + 普通连字符 -)
   -> 图片先压缩:单张 200-500KB、长边约 1500px

3. 本地验证(可选):
   cd C:\Users\24438\my-furniture-site
   npm run build
   -> 应约 204 页(165 + 39 + 功能页)

4. 推送上线:
   git add .
   git commit -m "feat: add 39 new products (0911 batch)"
   git push
   -> 等 1-2 分钟 Cloudflare 部署

5. 检查:
   https://tarshome.com/products/           应显示 204 个商品
   https://tarshome.com/category/bedroom/   Bedroom 分类(+15)
   https://tarshome.com/category/study/     Study 分类(+2)

【本次要点】
- 表格 57 行里有 10 组多图(sofa1515 / sofa1614 / sofa1622 / sofa1626 /
  sofa1855 / sofa1877 / sofa2018 / sofa2062 / sofa2090 / sofa2095),
  -2/-3 后缀行已合并进主商品 gallery,详情页可切换多图。
- 分类分布: Living Room 21 / Bedroom 15 / Study 2 / Home Decoration 1
- 全部 title / description 已翻译成英文。
- 注意: wallpaintng1178 和 walpainting1453 两个 slug 是表格原样
  (用户拼写),图片文件名必须按表格一字不差,勿自行改正。
