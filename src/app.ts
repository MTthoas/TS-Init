// Object: app.ts
import { Museum, Statue } from "./classes/index";
import { Art, Painting } from "./interface/index";

const p1: Painting = { name: "La joconde", author: "Leonardo", description: "Une peinture", type: "Peinture", createdDate: new Date(1503, 0, 1) };
const m = new Museum("Louvre",[],{street: "Rue de Rivoli", city: "Paris", zipCode: "75001", country: "France"});
const statue = new Statue("Michel-Ange", "David", new Date(1504, 0, 1));

// console.log(p1)
console.log('' + m)
// console.log(statue)