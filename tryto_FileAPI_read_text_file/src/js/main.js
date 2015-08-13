$(function () {

    // --------------------------------------------------------
    // 関数定義
    // --------------------------------------------------------
    function handleFileSelect(evt) {
        console.log("handleFileSelect");
        console.log(evt);

        var files = evt.target.files; // inputタグからFileオブジェクトを取得

        // ファイル数分実行
        for (var i = 0, f; f = files[i]; i++) {
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader(); // ファイル読み取り用オブジェクト作成

            // ファイルを読み時
            reader.onload = (function (theFile) {
                return function (e) {
                    // サムネイル用のimgタグ
                    var $html = ['<img class="photo" src="', e.target.result, '" title="', escape(theFile.name), '">'].join('');

                    // サムネイルタグを生成
                    $('output').append($html);
                };
            })(f);

            // データURLにエンコードした内容を格納
            reader.readAsDataURL(f);
        }
    }

    var file = document.querySelector('#getfile');

    file.onchange = function () {
        console.log("file.onchange");

        var fileList = file.files;
        //読み込み
        var reader = new FileReader();
        reader.readAsText(fileList[0]);

        //読み込み後
        reader.onload = function () {
            document.querySelector('#preview').textContent = reader.result;
        };
    };

    // --------------------------------------------------------
    // Ready時実行
    // --------------------------------------------------------
    // File APIのサポートチェックし、ボタンを押した時に実行
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        console.log("ボタンが押されました");
        $('#files').on('change', handleFileSelect);
    } else {
        alert('お使いのブラウザはサポートしておりません');
    }

});