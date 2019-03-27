## vue 初期設定の注意点(2019/03/27時点)

 - webpack.configファイルにコメントアウトは書かない
 - gulp3系と4系ではtaskの書き方に違いがある(参考[gulp v4.0.0がプレリリース！ 移行方法と変更点まとめ](https://satoyan419.com/gulp-v4/))  
 下記のエラーが出たらひとまず4系から3系のダウンロードへ変更する
 ```angular2html
AssertionError: Task function must be specified
```

 - babelおよびbabel-xxxはversionの互換性があるため、エラーが出たら指示通りのversionを導入すること