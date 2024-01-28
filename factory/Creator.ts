import { IProduct } from "./IProduct";

export abstract class Creator {
  abstract createProduct(): IProduct;
}
