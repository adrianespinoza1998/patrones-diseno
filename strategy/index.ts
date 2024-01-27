import { Client } from "./Client";
import { OrderCreationStrategyUnpaidClient } from "./OrderCreationStrategyUnpaidClient";
import { OrderCreationStrategyUpToDateClient } from "./OrderCreationStrategyUpToDateClient";
import { OrderCreator } from "./OrderCreator";
import { Product } from "./Product";

const client = new Client(0);
const products = [new Product("Product 1", 10), new Product("Product 2", 20)];
const unpaidStrategy = new OrderCreationStrategyUnpaidClient();
const upToDateStrategy = new OrderCreationStrategyUpToDateClient();

const orderCreator = new OrderCreator(
  client.isUpToDate() ? upToDateStrategy : unpaidStrategy
);
