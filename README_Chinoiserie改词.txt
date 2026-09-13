TARS HOME 全站改词包:French-Chinese Style → Chinoiserie
==========================================

【改动内容】
- 全部 293 个商品 .md 已替换(其中 206 个含 French-Chinese 被修改,87 个不含的也一并覆盖保持版本一致)
- title: "French-Chinese Style Sofa" → "Chinoiserie Sofa";"Gilded Hand-Painted French-Chinese Style Armchair" → "Gilded Hand-Painted Chinoiserie Armchair"
- description: "French-Chinese style ..." → "Chinoiserie ...";"of the French-Chinese living aesthetic" → "of the Chinoiserie living aesthetic"
- 首页/Layout/全部商品页 3 个模板的独立文案也改了(品牌区/页头/meta/footer)
- 纯 "French-Style"(法式风格,非中国风)一律未动

【参考风格(用户确认)】
- Chinoiserie furniture / Hand-painted Chinoiserie cabinet / Chinoiserie art

【操作步骤】
1. 解压覆盖到 C:\Users\24438\my-furniture-site(全部选"替换")
2. 本地验证: npm run build(约 293 页无红错;Pagefind 索引会重新生成,搜索也变新词)
3. 推送: git add . && git commit -m "style: use Chinoiserie instead of French-Chinese Style" && git push
4. 等 1-2 分钟部署,刷新首页/商品页/搜索看效果

【验证点】
- 商品标题:如 https://tarshome.com/products/sofa1436/ 标题应显示 "Chinoiserie Sofa"
- 首页:品牌区 "The Art of Chinoiserie Craftsmanship"
- 搜索:搜 "chinoiserie" 应出结果
