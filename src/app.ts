import { Hippopotamus } from "./classes/hippopotamus.classes";

let hippo1 = new Hippopotamus("Hippo1", 1000, 50);
let hippo2 = new Hippopotamus("Hippo2", 700, 75);

console.log(hippo1.toString());
console.log(hippo2.toString());

console.log("Hippo 1 se bat contre Hippo 2");
console.log(hippo1.fight(hippo2));

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 15; j++){
        hippo1.eat();
        hippo1.eat();
        hippo1.swim();
        hippo1.swim();
        hippo1.swim();
    }
    console.log(hippo1.toString());
}