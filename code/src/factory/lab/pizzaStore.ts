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
    if (type === PizzaType.Classic) {
      return new ClassicPizzaFactory().bakePizza(style, size);
    } 
    
    if (type === PizzaType.Cheese) {
      return new CheesePizzaFactory().bakePizza(style, size);
    }
    
    if (type === PizzaType.Seafood) {
      return new SeaFoodPizzaFactory().bakePizza(style, size);
    }
  }
}
