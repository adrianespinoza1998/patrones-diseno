import { Component1 } from "./Component1";
import { Component2 } from "./Component2";
import { ConcreteMediator } from "./ConcreteMediator";

const c1 = new Component1();
const c2 = new Component2();

const mediator = new ConcreteMediator(c1, c2);

c1.doA();

c2.doD();
