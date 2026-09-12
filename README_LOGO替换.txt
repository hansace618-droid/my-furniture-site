TARS HOME LOGO 替换包(纯图片,无代码改动)
========================================

1. 解压覆盖到项目根目录 C:\Users\24438\my-furniture-site
   -> 同名替换即可,4 个图片文件

2. 推送:
   git add .
   git commit -m "chore: update header logo and favicon"
   git push
   -> 等 1-2 分钟 Cloudflare 部署

3. 效果:
   - 页头 logo:新横版 LOGO(白字透明底,适配深色页头)
   - 浏览器标签图标 / 手机添加到主屏幕图标:新正方形 LOGO

说明:
- logo-header.png 已处理为"黑字反白+白底透明",深色页头上显示白色
  LOGO(原图是白底黑字,直接放会变白块)
- favicon.ico 含 16/32/48 三尺寸,favicon.png 64x64,
  apple-touch-icon.png 180x180
- 图片背景已抹白,边缘干净无灰框
