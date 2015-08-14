var Person = (function () {

    // 静的プライベートメンバ
    var count = 0;

    // コンストラクタ
    function Person(nickname) {
        // プロパティ（メンバ変数）
        this.nickname = nickname;

        this.getNicknamePrivate = function () {
            return nickname;
        }
        this.setNicknamePrivate = function (newname) {
            nickname = newname;
        }

        // コンストラクタからメソッドの呼び出し
        Person.prototype.setName.call(this, nickname);

        this.count = 0;
    }

    // メソッド
    Person.prototype.greet = function () {
        // メソッドから別のメソッドの呼び出し
        console.log("Hello, " + this.getNickname());

        countup();
    }

    // アクセサ（getter/ setter）
    Person.prototype.getNickname = function () {
        return this.nickname;
    }
    Person.prototype.setName = function (nn) {
        this.nickname = nn;
        nickname = nn;
    }

    // 静的プライベートメソッド
    function countup() {
        count++;
    }

    // 静的パブリックメソッド
    Person.getCount = function () {
        return count;
    }

    return Person;
})();