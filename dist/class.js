"use strict";
class Car {
    constructor() {
        this.color = "red";
        this.brand = "Honda";
        this.price = 100000;
    }
    getAllDAta() {
        return `color car ${this.color} brand car is ${this.brand} and the price is ${this.price}`;
    }
}
const getInfo = new Car;
console.log(getInfo.color);
const data = getInfo.getAllDAta();
console.log(data);
class Car2 extends Car {
    // meng overide/menimpa method parent 
    getAllDAta() {
        return `hello mam`;
    }
    // jika methot parent telah ter overide cara mangilnya harus pake super agar data dari parent ga terpenfaeuh contohh
    getDAtaParent() {
        return super.getAllDAta();
    }
}
const child1 = new Car2();
console.log(child1.getAllDAta());
let parentData = child1.getDAtaParent();
console.log(parentData);
