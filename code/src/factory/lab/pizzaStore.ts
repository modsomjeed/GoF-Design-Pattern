import { CheesePizzaFactory } from './cheesePizzaFactory';
import { ClassicPizzaFactory } from './classicPizzaFactory';
import {
  BreadType,
  CheeseType,
  Ingredient,
  Pizza,
  PizzaSize,
  PizzaStyle,
  PizzaType,
} from './pizza';
import { SeaFoodPizzaFactory } from './seaFoodPizzaFactory';

export class PizzaStore {
  orderPizza(style: PizzaStyle, type: PizzaType, size: PizzaSize) {
    var pizza: Pizza = new Pizza();
    if (type === PizzaType.Classic) {
      pizza = new ClassicPizzaFactory().bakePizza(style, size);
    } else if (type === PizzaType.Cheese) {
      pizza = new CheesePizzaFactory().bakePizza(style, size);
    } else if (type === PizzaType.Seafood) {
      pizza = new SeaFoodPizzaFactory().bakePizza(style, size);
    }
    return pizza;
  }
}
