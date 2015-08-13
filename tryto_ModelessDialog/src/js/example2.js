/*

 */
$(function () {
    var child;
    // 別窓
    function winOpen(url, width, height) {
        child = window.open(
            url,
            'sub',
            "width=" + width + ", height=" + height
        );
    }

    $('#openChildButton').click(function () {
        // 子窓の存在チェック
        if (!child || child.closed) {
            winOpen($('#form03').attr('action'), 350, 150);
        }
        return false;
    });
});