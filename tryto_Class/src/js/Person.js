/*eslint no-console: 0 */
(function () {
    "use strict";

    // 静的プライベートメンバ
    var count = 0;

    // コンストラクタ
    function Person(nickname) {
        // プロパティ（メンバ変数）
        this.nickname = nickname;

        this.getNicknamePrivate = function () {
            return nickname;
        };
        this.setNicknamePrivate = function (newName) {
            nickname = newName;
        };

        // コンストラクタからメソッドの呼び出し
        Person.prototype.setName.call(this, nickname);

        this.count = 0;
    }

    // メソッド
    Person.prototype.greet = function () {
        // メソッドから別のメソッドの呼び出し
        console.log("Hello, " + this.getNickname());

        countUp();
    };

    // アクセサ（getter/ setter）
    Person.prototype.getNickname = function () {
        return this.nickname;
    };
    Person.prototype.setName = function (nn) {
        this.nickname = nn;
    };

    // 静的プライベートメソッド
    function countUp() {
        count++;
    }

    // 静的パブリックメソッド
    Person.getCount = function () {
        return count;
    };

    return Person;
})();