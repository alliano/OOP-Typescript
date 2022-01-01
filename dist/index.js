"use strict";
let aray = [
    1, 2, 3, 4, 6
];
aray.forEach(a => console.log(a));
console.log("bampuki");
var bulan;
(function (bulan) {
    bulan["apr"] = "april";
    bulan["jan"] = "january";
})(bulan || (bulan = {}));
console.log(bulan.apr);
const sayHelo = (name) => {
    return `hallo nama saya ${name}`;
};
let saya = sayHelo("alliano");
console.log(saya);
const kalkulasiData = (arg, arg2) => {
    const data = arg + arg2;
    return data;
};
let result = kalkulasiData(20, 100);
console.log(result);
const hasil = (value1, value2) => {
    return value1 / value2;
};
let ab = hasil(100, 3);
console.log(ab);
class user {
    constructor(name) {
        console.log(name);
    }
    getname(name) {
        return name;
    }
}
const a = new user("alliano");
const b = a.getname("alliano1");
console.log(b);
console.log(a);
