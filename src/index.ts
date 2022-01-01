let aray:Array<number> = [
    1,2,3,4,6
]

aray.forEach(a => console.log(a));

console.log("bampuki");

enum bulan {
    apr = "april",
    jan = "january",
}

console.log(bulan.apr);



const sayHelo = (name:string):string => {
    return `hallo nama saya ${name}`
}

let saya:string = sayHelo("alliano");

console.log(saya);


const kalkulasiData = (arg:number,arg2:number):number => {
    const data:number = arg + arg2;

    return data

}

let result = kalkulasiData(20,100);

console.log(result);

type calculate = (value1:number,value2:number) => number;
const hasil = (value1:number,value2:number):number => {
    return value1 / value2;
}

let ab:number = hasil(100,3);
console.log(ab)




class user{
    constructor(name:string){
        console.log(name)
    }


    getname(name:string):string {
        return name;
    }
}

const a = new user("alliano");
const b:string = a.getname("alliano1");

console.log(b)

console.log(a)