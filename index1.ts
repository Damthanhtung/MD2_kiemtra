import {Tiger} from "./thuchanh1";
import {Chicken} from "./Edible1";
let animal = [];
animal[0] = new Tiger();
animal[1] = new Chicken();
animal.forEach((item,index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
})
