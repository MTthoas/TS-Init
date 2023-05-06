import { Weapons } from "./weapons.class";

export class Sword extends Weapons{
    private legendary: boolean;
    private year : number;

    constructor(name: string, height: number, width: number, weight: number, price: number, legendary: boolean, year: number){
        super(name, height, width, weight, price);
        this.legendary = legendary;
        this.year = year;
    }

    // setters

    setLegendary(legendary: boolean): void{
        this.legendary = legendary;
    }

    setYear(year: number): void{
        this.year = year;
    }

    // getters

    getLegendary(): boolean{
        return this.legendary;
    }

    getYear(): number{
        return this.year;
    }

    // methods

    duration(): number {
        return (this.getWeight() * this.year) / this.getPrice();
    }

    damage(): number {
        let result = (this.getWeight() / (this.getHeight() * this.getWidth()) + this.bonus()) / this.getYear();
        if(!this.legendary || this.duration() > 10 ){
            result = result + (result * 0.1)
        }
        return result;
    }

    bonus(): number {
        if(this.legendary){
            return this.getWeight() / this.getYear();
        }
        return 0;
    }




}