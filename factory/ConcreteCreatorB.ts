import { Creator } from "./Creator";
import { ProductB } from "./ProductB";

export class ConcreteCreatorB extends Creator {
  createProduct(): ProductB {
    return new ProductB();
  }
}
