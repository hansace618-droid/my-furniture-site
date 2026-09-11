TARS HOME 更新包(多图合并 + 页面优化)
========================================

【一、包内文件(10 个)】
新增商品(多图合并):
  src/content/products/cabinet1831.md   (4 张图: cabinet1831-1~4)
  src/content/products/cabinet1847.md   (3 张图: cabinet1847-1~3)
  src/content/products/table2057.md     (2 张图: table2057-1~2)
  src/content/products/sofa4913.md      (3 张图: sofa4913-1~3)
修改商品:
  src/content/products/armoire2172.md   (加 2 张图: armoire2172-2/-3)
页面:
  src/pages/products/[slug].astro       (详情页:大图 + 缩略图切换)
  src/pages/index.astro                 (Trending 改 8 个)
  src/pages/category/[slug].astro       (链接新开)
  src/layouts/Layout.astro              (导航/页脚链接新开)
  public/styles/global.css              (分类 3 列、商品 4 列、缩略图样式)

【二、必须删除的 12 个旧文件(合并后不再独立成页)】
到 C:\Users\24438\my-furniture-site\src\content\products\ 删除:
  cabinet1831-1.md  cabinet1831-2.md  cabinet1831-3.md  cabinet1831-4.md
  cabinet1847-1.md  cabinet1847-2.md  cabinet1847-3.md
  table2057-1.md    table2057-2.md
  sofa4913-1.md     sofa4913-2.md     sofa4913-3.md
(= 合并后商品数从 173 变为 165,URL 从 /products/cabinet1831-1/ 变为 /products/cabinet1831/)

【三、操作步骤】
1. 解压覆盖到 C:\Users\24438\my-furniture-site(同名替换)
2. 按【二】删除 12 个旧 md
3. 确认图片: armoire2172-2.jpg、armoire2172-3.jpg 是否已在
   C:\Users\24438\my-furniture-site\public\images\products\(你已放,确认下)
4. git add .  &&  git commit -m "feat: multi-image gallery, merge SKUs, grid layout, new-tab links"  &&  git push

【四、本次改动说明】
- 商品详情页:多图商品显示大图 + 底部缩略图(点击切换);单图商品不受影响
- 首页分类:电脑端一行 3 个,共 2 行 6 个分类
- 首页 Trending:显示 8 个 featured,电脑端一行 4 个 = 2 行整齐
- 所有站内链接:点击在新标签页打开(含导航、页脚、返回链接)
- 注:armchair1620 / diningchair1621 按你说的保持不变(未合并)