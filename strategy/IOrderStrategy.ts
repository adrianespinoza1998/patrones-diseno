import { Order } from "./Order";
import { Product } from "./Product";

export interface IOrderStrategy {
  createOrder(products: Array<Product>): Order;
}
