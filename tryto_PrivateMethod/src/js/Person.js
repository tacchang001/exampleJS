var Person = (function () {
    function Person(nickname) {
        this.nickname = nickname;

//        var nickname = "コンストラクタ関数内でvar宣言した変数";

        this.getName = function () {
            return nickname;
        }
        this.setName = function (newname) {
            nickname = newname;
        }

        Person.prototype.nickname = "prototypeに設定したname";

        this.getNameFromPrototype = function () {
            return Person.prototype.nickname;
        }

        this.printValues = function () {
            console.log("--------------------------------");
            console.log("this.nickname = " + this.nickname);
            console.log("var nickname  = " + nickname);
            console.log("argument      = " + this.getName());
            console.log("--------------------------------");
        }
    }

//    Person.prototype.greetPrivate = function () {
//        console.log("Hi, " + nickname); // nickname is not defined
//    }

    Person.prototype.greet = function () {
        console.log("Hello, " + this.getNickname());
    }

    Person.prototype.getNickname = function () {
        return this.nickname;
    }
    Person.prototype.setNickname = function (nn) {
        this.nickname = nn;
    }

    Person.prototype.getNamePublic = function () {
        return this.getName();
    }
    Person.prototype.setNamePublic = function (newName) {
        this.setName(newName);
    }

    return Person;
})();