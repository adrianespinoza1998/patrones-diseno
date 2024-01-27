import { EOrderStatus } from "./EOrderStatus";
import { Product } from "./Product";

export class Order {
  products: Product[];
  status: EOrderStatus;
  constructor(products: Product[], status: EOrderStatus) {
    this.products = products;
    this.status = status;
  }
}
