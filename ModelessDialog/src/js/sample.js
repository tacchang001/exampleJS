// http://shoyu-ramen23.jugem.jp/?eid=203

/*
 親ウィンドウのテキストボックスへ値をセット
 */
function setFormInput(string) {
    if (!window.opener || window.opener.closed) {
        window.close();
    } else {
        // window.openerを使って開いた元のDOMにアクセスできる
        window.opener.document.getElementById('title01').innerHTML = string;
        window.opener.document.form01.text01.value = string;
    }
}

