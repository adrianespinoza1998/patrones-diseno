import { IProduct } from "./IProduct";

export class ProductB implements IProduct {
  doStuff() {
    console.log("Product B does stuff.");
  }
}
