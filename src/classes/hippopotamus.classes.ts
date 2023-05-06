export class Hippopotamus{
    name: string;
    weight: number;
    tusksSize : number;

    constructor(name: string, weight: number, tusksSize: number){
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }

    // - void swim() // perd 300g
    swim(){
        console.log(this.name + "is swimming");
        this.weight -= 300;
    }

    // - void eat() // gagne 1kg 

    eat(){
        console.log(this.name + " : is eating");
        this.weight += 1;
    }

    // - Hippopotamus fight(Hippopotamus) 

    fight(hippo: Hippopotamus){
        if(this.tusksSize > hippo.tusksSize || this.weight > hippo.weight + (hippo.weight/0.20)  ){
            console.log("J'ai gagné boy");
        }else if(this.tusksSize < hippo.tusksSize || this.weight < hippo.weight + (hippo.weight/0.20)){
            console.log("J'ai perdu, big L");
        }else{
            console.log("Egalité");
        }
    }

    // Ecrire la méthode permettant de transformer votre objet en string 

    toString(){
        return `Name : ${this.name} / Weight : ${this.weight} / Tusks size : ${this.tusksSize}\n`;
    }



}