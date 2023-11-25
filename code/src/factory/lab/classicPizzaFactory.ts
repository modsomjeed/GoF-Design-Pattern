import { PizzaStyle, PizzaSize, Pizza, PizzaType, BreadType, CheeseType, Ingredient } from "./pizza";
import { PizzaFactory } from "./pizzaFactory";

export class ClassicPizzaFactory implements PizzaFactory {
    bakePizza(style: PizzaStyle, size: PizzaSize): Pizza {
        const pizza = new Pizza();
        pizza.type = PizzaType.Classic;
        pizza.size = size;
        
        if (style === PizzaStyle.Italian) {
            pizza.bread = BreadType.Thin;
        } else {
            pizza.bread = BreadType.Thick
        }
        pizza.cheese = CheeseType.Mozzarella;
        pizza.ingredients = [Ingredient.Tomato, Ingredient.Basil];

        return pizza;
    }
}