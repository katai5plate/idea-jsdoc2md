# idea-jsdoc2md
http://tonbi.jp/Game/RPGMakerMV/ をMarkdown化できないか実験

```
git clone https://github.com/katai5plate/idea-jsdoc2md.git && cd idea-jsdoc2md && yarn install
node index
```

# 思ったこと
- turndownだと何故かテーブルを変換してくれない。ほかは良好。
- jsdoc関連のcdnがない
- github上で見るのは辛いものがありそうなので、運用するならgh-pages化が妥当か
- https://github.com/leeoniya/reMarked.js がnodeで使えればなぁ
  - benvがdocumentsとかをwrapしてくれるらしい
