import { EOrderStatus } from "./EOrderStatus";
import { IOrderStrategy } from "./IOrderStrategy";
import { Order } from "./Order";
import { Product } from "./Product";

export class OrderCreationStrategyUpToDateClient implements IOrderStrategy {
  createOrder(products: Product[]): Order {
    return new Order(products, EOrderStatus.waitingForDispatch);
  }
}
