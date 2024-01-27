import { IOrderStrategy } from "./IOrderStrategy";
import { Order } from "./Order";
import { Product } from "./Product";

export class OrderCreator {
  strategy: IOrderStrategy;
  constructor(strategy: IOrderStrategy) {
    this.strategy = strategy;
  }
  createOrder(products: Product[]): Order {
    return this.strategy.createOrder(products);
  }
}
