import { SuperInduk } from "./SuperInduk"


abstract class Induk extends SuperInduk{
    public type:string;
    public brand:string;

    constructor(type:string,brand:string){
        super();
        this.type = type;
        this.brand = brand;
    }
    setDataParent(type:string,brand:string):void{
        this.brand = brand;
        this.type = type;
    }
    getData():string{
        return `ni diari method getData bukan abstrak`;
    }
    // cara membuat abstract
    abstract getDataAbstr():string;


}

export {Induk}