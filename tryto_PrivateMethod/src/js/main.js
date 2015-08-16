function print(person) {
    person.greet();
    console.log(person.getNickname());
    console.log(person.getNamePublic());
    console.log(person.getNameFromPrototype());
}

var a = new Person("コンストラクタで与えた名前");
print(a);
a.printValues();

console.log("a.setName ------");
a.setNickname("aをリネーム");
print(a);
a.printValues();

console.log("a.setName ------");
a.setName("aのprivate?");
print(a);
a.printValues();

console.log("a.setName ------");
a.setNickname("aを再度リネーム");
print(a);
a.printValues();

console.log("var b = new Person ------");
var b = new Person("コンストラクタで与えた別の名前");
print(b);
b.printValues();

console.log("b.setName ------");
b.setNickname("bをリネーム");
print(b);
b.printValues();

console.log("b.setName ------");
b.setName("bのプライベート?");
print(b);
b.printValues();

console.log("b.setName ------");
b.setNickname("bを再度リネーム");
print(b);
b.printValues();

