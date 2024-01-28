import { App } from "./App";
import { ConcreteCreatorA } from "./ConcreteCreatorA";
import { ConcreteCreatorB } from "./ConcreteCreatorB";

const appA = new App(new ConcreteCreatorA());

appA.createProduct();

const appB = new App(new ConcreteCreatorB());

appB.createProduct();
