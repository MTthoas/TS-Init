import {Art} from '../interface/art.interface';

export class Statue implements Art {
    author: string;
    createdDate: Date;
    description?: string;
    name: string;
    value?: number;

    constructor(author: string, name: string, createdDate: Date){
        this.author = author;
        this.name = name;
        this.createdDate = createdDate;
    }
}