import { Room } from './room.class';
import { Address } from '../interface/adress.interface';


export class Museum{
    name: string;
    rooms: Room[];
    address: Address;

    constructor(name: string, rooms: Room[], address: Address){
        this.name = name;
        this.rooms = rooms;
        this.address = address;
    }

    toString(): string{

        let res = `Museum: ${this.name} - ${this.address.city}`
        for(let i = 0; i < this.rooms.length; i++){
            // res += `\n${this.room[i]}`
            res += '\n' + this.rooms[i]
        }

        return res;
    }

}