import { Creator } from "./Creator";
import { ProductA } from "./ProductA";

export class ConcreteCreatorA extends Creator {
  createProduct(): ProductA {
    return new ProductA();
  }
}
