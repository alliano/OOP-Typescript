"use strict";
class Company {
    constructor(args) {
        console.log(`nama saya ${args}`);
    }
}
class ChildCimpany extends Company {
    constructor() {
        super(``);
    }
}
const perusahaan = new Company("alliano");
const kelasChild = new ChildCimpany;
