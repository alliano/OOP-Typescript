class Company {
    constructor(args:string){
       console.log(`nama saya ${args}`)
    }
}

class ChildCimpany extends Company{
    constructor(){
        super(``);
    }
}


const perusahaan  =  new Company("alliano");

const kelasChild = new ChildCimpany