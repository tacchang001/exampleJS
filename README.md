# exampleJS
JavaScriptのサンプルコード


## tryto_WebSocket_server_push

WebSocketの例。サーバ側はC言語で作成。libwebsocketsライブラリ使用。

* build_test-server.sh    libwebsocketsに付属するtest-serverをビルドする
* run_test-server.sh      libwebsocketsに付属するtest-serverを実行する
* クライアントは、http://localhost:7681/
* build_example.sh        サンプル（サーバ）をビルドする
* run_example.sh          サンプル（サーバ）を実行する
* クライアントは、ブラウザでsrc/client.htmlを実行する

## tryto_ModelessDiag

モードレスダイアログの例。window.openerオブジェクトを使えば開いた元のDOMにアクセス出来る点がポイント。

* example1　Windows 7 Chrome Ver.44で子ウィンドウから親ウィンドウに値が渡らない
* example2　Windows 7であっても子ウィンドウから親ウィンドウに値が渡る

## tryto_FileAPI_read_text_file

ローカルファイルを読み込む例

## tryto_Class

一般的なクラス実装。private or publicメンバ、インスタンスメソッド、静的メソッド。

## tryto_MoveDiv

1秒毎にdivタグ領域を移動させる。
