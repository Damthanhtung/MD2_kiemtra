export abstract class Animal {
    abstract makeSound(): string;
}
export class Tiger extends Animal {
    makeSound(): string {
        return "Tiger: roarrrrr!";
    }
}
export class Chicken extends Animal {
    makeSound(): string {
        return "Chicken: cluck-cluck!";
    }
}
