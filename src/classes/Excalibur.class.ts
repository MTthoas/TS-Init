import { Sword } from "./Sword.class"

export class Excalibur extends Sword{

    constructor(){
        super("Excalibur", 1.5, 0.1, 1.2, 1000000, true, 1000);
    }
    // methods

    bonus(): number {
        return (this.getWeight() / this.getYear()) * 0.30;
    }


}