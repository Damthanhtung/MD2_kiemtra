import {Animal} from "./thuchanh1";


export interface Edible {
    howToEat(): string;

}
export class Chicken extends Animal implements Edible {

}