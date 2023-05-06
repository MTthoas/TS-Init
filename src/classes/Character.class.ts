import { Weapons } from "./weapons.class";

export class Character{
    name : string;
    health : number;
    hitChance: number;
    weapons: Weapons;

    constructor(name: string, health: number = 25000, Weapons: Weapons){
        this.name = name;
        this.health = Math.max(health,0);
        this.hitChance = Math.floor(Math.random() * (70-50) + 50);
        this.weapons = Weapons;
    }

    // setters

    setName(name: string): void{
        this.name = name;
    }

    setHealth(health: number): void{
        this.health = health;
    }

    setHitChance(hitChance: number): void{
        this.hitChance = hitChance;
    }

    // getters

    getName(): string{
        return this.name;
    }

    getHealth(): number{
        return this.health;
    }

    getHitChance(): number{
        return this.hitChance;
    }

    // methods

    public protect(attackValue : number): void{
        const damage: number = Math.floor(attackValue* 0.55)
        this.health = Math.max(this.health - damage, 0);
    }

    public attack(target: Character): void{
        const damageHit : number = Math.floor(target.weapons.damage() * 1.13)
        const randomValue = Math.random() * 100;

        if(randomValue < this.hitChance){
            target.protect(damageHit);
        }
    }

}