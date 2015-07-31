$(function () {
    // 親窓の存在チェック
    if (!window.opener || window.opener.closed) {
        return;
    }

    // 子窓から親窓を操作
    $('#select1').click(function () {
        window.opener.$('#subject01').val('クリックされた');
        // 操作後クローズ
        window.close();
        return false;
    });
});