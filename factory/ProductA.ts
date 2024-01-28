import { IProduct } from "./IProduct";

export class ProductA implements IProduct {
  doStuff(): void {
    console.log("Product A does stuff");
  }
}
