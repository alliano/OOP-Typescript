import { Induk } from "./Induk";


class Anak1 extends Induk implements GoodMorning,goodAfternoon{
    public nama:string;
    public Umur:number;
    public hobi:string;
    constructor(nama:string,umur:number,hobi:string){
        super();
        this.nama = nama;
        this.Umur = umur;
        this.hobi = hobi;
    }
    getIdentyty():string | number{
        return `my name ${this.nama} my age is ${this.Umur} my hobby is ${this.hobi}`;
    }
    getDataAbstr(): string {
        return `ini dari kelas Anak1 ini implement method abstract dari kelas parent`;
    }
    sayAnythingOnMorning(name:string): string {
        return `hallo good morning ${name} i hope ur day is better`;
    }
    sayGoodafternoon(name?: string, date?: number, year?: number) {
        return `hallo my name is ${name} now date ${date} and year ${year}`;
    }
    setDataParent(type: string, brand: string): void {
       this.brand = brand;
       this.type = type;
       console.log(`the type is ${this.type} and brand of ${this.brand}`); 
    }
}

const obj = new Anak1("alliano",18,"coding");
console.log(obj.getData())
console.log(obj.getDataAbstr());
const say = obj.sayAnythingOnMorning("alliano");
console.log(say);
const goodAfternoon = obj.sayGoodafternoon("alliano",5,2022);
console.log(goodAfternoon);
const myIdent = obj.getIdentyty();
console.log(myIdent);
obj.setDataParent("sport Car","Honda");
