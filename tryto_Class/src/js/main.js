var tacchang = new Person("たっちゃん");
console.log(tacchang.getNickname());
tacchang.greet();
tacchang.setName("たつお");
console.log("new: " + tacchang.getNicknamePrivate());
tacchang.setNicknamePrivate("だづお");
console.log("newest: " + tacchang.getNicknamePrivate());
tacchang.greet();

console.log(Person.getCount());

var kacchang = new Person("かっちゃん");
console.log(kacchang.getNickname());
kacchang.greet();
console.log("new: " + kacchang.getNicknamePrivate());
kacchang.greet();

console.log(Person.getCount());