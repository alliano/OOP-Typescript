"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Induk = void 0;
const SuperInduk_1 = require("./SuperInduk");
class Induk extends SuperInduk_1.SuperInduk {
    constructor(type, brand) {
        super();
        this.type = type;
        this.brand = brand;
    }
    setDataParent(type, brand) {
        this.brand = brand;
        this.type = type;
    }
    getData() {
        return `ni diari method getData bukan abstrak`;
    }
}
exports.Induk = Induk;
