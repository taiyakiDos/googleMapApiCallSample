# googleMapApiCallSample

## Description
WebページにGoogleマップを埋め込み、特定の箇所にマーカーをたてるサンプルです。  
マーカーのアイコンはデフォルトのものではなく、別に用意したアイコンを表示するようにしています。  

当プログラムはそのままでは正しく動作しません。以下に記載する部分を適宜修正してください。  

- index.html 内の google maps api 呼びだし部分  
```
<script src="https://maps.googleapis.com/maps/api/js?key={APIKey}&sensor=TRUE&callback=initMap"></script>  
```  
以下リンク先の「ステップ3: APIキーを取得する」手順に沿ってAPIキーを取得し、  
ソース内の{APIKey}部分を置き換えてください。  
[developers.google.com](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)  

- index.html 内の Google App Script 呼び出し部分  
```  
<script async defer src="https://script.google.com/macros/s/{GASのID}/exec?callback=getData"></script>  
```  
Google Apps Scriptのコードを実装し、URLにアクセスするとJSONを返す仕組みにしています。  
こちらの方々の記事を参考に作ってみてください  
    - [Google SpreadSheet のデータを JSON 形式で取得する Web API をサクッと作る](https://qiita.com/takatama/items/7aa1097aac453fff1d53)  
    - [【GAS】WebアプリやAPIも作れちゃう！HtmlService、ContentServiceについて、できることをまとめてみた。　～ その④ JSON API ～](https://webird-programming.tech/archives/518)  

## Screen Shot


## License
This software is released under the MIT License, see LICENSE.
