import { Creator } from "./Creator";

export class App {
  private creator: Creator;

  constructor(creator: Creator) {
    this.creator = creator;
  }

  public createProduct() {
    const product = this.creator.createProduct();
    product.doStuff();
  }
}
