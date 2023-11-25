import { BreadType, CheeseType, Ingredient, Pizza, PizzaSize, PizzaStyle, PizzaType } from "./pizza";
import { PizzaFactory } from "./pizzaFactory";

export class CheesePizzaFactory implements PizzaFactory {
    bakePizza(style: PizzaStyle, size: PizzaSize): Pizza {
        const pizza = new Pizza();
        pizza.type = PizzaType.Cheese;
        pizza.size = size;
        pizza.cheese = CheeseType.Parmesan;
        pizza.bread = BreadType.Thick;

        if (style === PizzaStyle.Italian) {
            pizza.ingredients = [
                Ingredient.Basil,
                Ingredient.Olive,
                Ingredient.Onion,
            ];
        } else {
            pizza.ingredients = [
                Ingredient.Tomato,
                Ingredient.Basil,
                Ingredient.Olive,
                Ingredient.Onion,
            ];
        }

        return pizza;
    }
}