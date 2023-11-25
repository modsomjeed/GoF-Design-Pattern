import { BreadType, CheeseType, Ingredient, Pizza, PizzaSize, PizzaStyle, PizzaType } from "./pizza";
import { PizzaFactory } from "./pizzaFactory";

export class SeaFoodPizzaFactory implements PizzaFactory {
    bakePizza(style: PizzaStyle, size: PizzaSize): Pizza {
        const pizza = new Pizza();
        pizza.type = PizzaType.Seafood;
        pizza.size = size;
        pizza.cheese = CheeseType.Mozzarella;
        pizza.ingredients = [
            Ingredient.Tomato,
            Ingredient.Onion,
            Ingredient.Shrimp,
            Ingredient.Tuna,
        ];

        if (style === PizzaStyle.Italian) {
            pizza.bread = BreadType.Thin;
        } else {
            pizza.bread = BreadType.Thick;
        }

        return pizza;
    }
}