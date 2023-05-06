export class Weapons{
    private name: string;
    private height: number;
    private width: number;
    private weight: number;
    private price: number;

    constructor(name: string, height: number, width: number, weight: number, price: number){
        this.name = name;
        this.height = height;
        this.width = width;
        this.weight = weight;
        this.price = price;
    }

    // setters

    setName(name: string): void{
        this.name = name;
    }

    setHeight(height: number): void{
        this.height = height;
    }

    setWidth(width: number): void{
        this.width = width;
    }

    setWeight(weight: number): void{
        this.weight = weight;
    }

    setPrice(price: number): void{
        this.price = price;
    }

    // getters

    getName(): string{
        return this.name;
    }

    getHeight(): number{
        return this.height;
    }

    getWidth(): number{
        return this.width;
    }

    getWeight(): number{
        return this.weight;
    }

    getPrice(): number{
        return this.price;
    }

    // methods

    damage(): number{
        return (this.weight / (this.height * this.width));
    }
    
    duration(): number{
        return (this.price / this.weight) * this.damage();
    }

    bonus(): number{
        return 0;
    }

}