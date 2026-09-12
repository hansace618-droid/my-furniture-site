TARS HOME favicon 重制包:黑字白底高辨识度版
============================================

【解决什么问题】
旧 favicon 在深色浏览器导航条上不好辨认。
新版:纯白背景 + 纯黑 LOGO + 高对比,任何底色导航条都清晰。

【文件(3 张图,覆盖同名)】
1. public/favicon.ico         -> 完整 16/32/48 三尺寸(浏览器标签页)
2. public/favicon.png         -> 64x64(现代浏览器优先用这张)
3. public/apple-touch-icon.png-> 180x180(手机添加到主屏幕)

【操作】
1. 解压覆盖到 C:\Users\24438\my-furniture-site(3 个同名替换)
2. git add . && git commit -m "fix: high-contrast black-white favicon" && git push
3. 等 1-2 分钟部署

【提示】
- 浏览器标签页图标可能缓存,强刷 Ctrl+F5 或换标签页查看
- 若之前"搜索结果图+LOGO"包还没推,可一起解压覆盖后统一 push
