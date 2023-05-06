import { Weapons } from "./weapons.class";

export class Gun extends Weapons{
    private bullets: number;

    constructor(name: string, height: number, width: number, weight: number, price: number, bullets: number){
        super(name, height, width, weight, price);
        this.bullets = bullets;
    }

    // setters

    setBullets(bullets: number): void{
        this.bullets = bullets;
    }

    // getters

    getBullets(): number{
        return this.bullets;
    }

    // methods

    duration(): number {
        return Math.max((this.getPrice() / this.getWidth()) * this.damage())
    }

    damage(): number {
        return this.getWeight() / (this.getHeight() * this.getWidth()) + this.bonus();
    }

    bonus(): number {
        // Correspond à une multiplication entre le nombre de balles et le poids, le tou divisé par le poids modulo le nombre de balles
        return (this.bullets * this.getWeight()) / (this.getWeight() % this.bullets);
    }

}