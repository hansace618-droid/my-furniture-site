TARS HOME 增量商品包(0910 表格 58 个新商品)
========================================

【本次是纯增量,不用删任何旧文件】

1. 解压本 zip 到项目根目录 C:\Users\24438\my-furniture-site
   -> 同名文件全部选"替换"
   -> 新增 58 个 .md 到 src\content\products\(线上已有 115 个不受影响)

2. 放 58 张新商品图片到 C:\Users\24438\my-furniture-site\public\images\products\
   -> 文件名必须与表格 image 列一字不差(全小写 + 普通连字符 -)
   -> 图片先压缩:单张 200-500KB、长边约 1500px

3. 本地验证(可选):
   cd C:\Users\24438\my-furniture-site
   npm run build
   -> 应约 182 页(115 + 58 + 9 个功能页)

4. 推送上线:
   git add .
   git commit -m "feat: add 58 new products (0910 batch)"
   git push
   -> 等 1-2 分钟 Cloudflare 部署

5. 检查:
   https://tarshome.com/products/           应显示 173 个商品
   https://tarshome.com/category/bedroom/   Bedroom 分类(新增 24 款)
   https://tarshome.com/category/console-hall/  Console & Hall 分类(新增 3 款)

注意:
- 本次新增分布: Living Room 27 / Bedroom 24 / Dining Room 4 / Console & Hall 3
- 全部 title/description 已翻译成英文
