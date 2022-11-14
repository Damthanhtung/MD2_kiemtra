import {Animal} from "./thuchanh1";
import {Edible} from "./Edible";
export class Chicken extends Animal implements Edible {
    makeSound(): string {
        return "Chicken: cluck-cluck! ";
    }
    howToEat(): string {
        return "Could be fried ";
    }
}