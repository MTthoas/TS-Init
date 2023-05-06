import {Art} from '../interface/art.interface'

export class Room{
    name: string;
    arts: Art[];

    constructor(name: string, arts: Art[]){
        this.name = name;
        this.arts = arts;
    }

    ToString(): string {
        let res = `${this.name} : \n`;
        for(let i = 0; i < this.arts.length; i++){
            const art = this.arts[i];
            res += art.name + '/' + art.author + '\n';
        }

        return res
    }
}
