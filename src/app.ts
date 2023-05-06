import { Weapons } from './classes/weapons.class';
import { Character } from './classes/Character.class';
import { Gun } from './classes/Gun.class';
import { Sword } from './classes/Sword.class'

const gun1 = new Gun("Glock", 0.2, 0.1, 0.5, 100, 10);
const gun2 = new Gun("AK-47", 0.5, 0.2, 1.5, 500, 30);

const épée = new Sword("OuinSword", 1.5, 0.1, 1.2, 5000, true, 1000);


const character1 = new Character("John", 25000, gun1);
const character2 = new Character("Jack", 25000, épée);

console.log("" + JSON.stringify(character1));
console.log("" + JSON.stringify(character2));

while(character1.getHealth() > 0 && character2.getHealth() > 0){

    const attack = character1.attack(character2);
    const damageCharacter1 = character1.weapons.damage();
    const damageCharacter2 = character2.weapons.damage();

    if(Math.random() > 0.5){
        console.log(`Attaque de ${character1.getName()} sur ${character2.getName()} : ${attack}`);
    }else{
        character2.protect(damageCharacter1);
        console.log(`Attaque de ${character1.getName()} sur ${character2.getName()} : Il a mis son bouclier, il a encore ${character2.getHealth()} points de vie`);
    }

    if (character2.health > 0) {
        if(Math.random() > 0.5){
            character2.attack(character1);
            console.log(`Attaque de ${character2.getName()} sur ${character1.getName()} : ${attack}`);
        } else {
            character2.protect(damageCharacter2);
            console.log(`Attaque de ${character2.getName()} sur ${character1.getName()} : Il a mis son bouclier, il a encore ${character2.getHealth()} points de vie`);
        }
    }
    
    
}
