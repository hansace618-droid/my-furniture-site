TARS HOME v2 全英文站 安装步骤
============================

【重要!先删旧的,再解压】
1. 删除旧商品文件:打开 C:\Users\24438\my-furniture-site\src\content\products\
   -> 把里面所有 .md 文件全部删除(旧 9 个商品的,里面现在只剩旧的)
   (或者直接删除整个 products 文件夹,解压会自动重建)

2. 解压本 zip 到项目根目录 C:\Users\24438\my-furniture-site
   -> 同名文件全部选择"替换/是"
   (会新增/替换:src 全部、public/styles、astro.config.mjs、package.json)

3. 放新商品图片 115 张:
   打开 C:\Users\24438\my-furniture-site\public\images\products\
   -> 把 115 张新图按 slug 命名放进去(如 armchair0242.jpg...)
   -> 旧图(armchair2171.jpg 等 9 张)可以删除
   -> Banner 图已放 public\images\banner\banner1.jpg / banner2.jpg

4. 安装新依赖(搜索功能需要,只这一次):
   打开 CMD:
   cd C:\Users\24438\my-furniture-site
   npm install

5. 本地验证构建:
   npm run build
   -> 成功标志:约 124 页(115 商品 + 首页 + 全部商品 + 6 分类 + 搜索),无红色报错

6. 推送上线:
   git add .
   git commit -m "feat: v2 全英文站 - 115 商品 + 分类页 + 搜索"
   git push

7. 等 1-2 分钟 Cloudflare 部署,打开:
   https://tarshome.com/                   首页(Banner 轮播)
   https://tarshome.com/products/         全部商品
   https://tarshome.com/category/living-room/  分类页
   https://tarshome.com/search/           搜索

说明:
- 商品英文 title/description 已由助手生成,以后想改直接在对应 .md 里改
- WhatsApp 号码已配置 8617336031842
- 分类共 6 个:living-room / dining-room / bedroom / study / console-hall / home-decoration
