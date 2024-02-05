import { FlyweightFactory } from "./FlyweightFactory";

const factory = new FlyweightFactory([
  ["Chevrolet", "Camaro2018", "pink"],
  ["Mercedes Benz", "C300", "black"],
  ["Mercedes Benz", "C500", "red"],
  ["BMW", "M5", "red"],
  ["BMW", "X6", "white"],
]);

const flyweight = factory.getFlyweight(["BMW", "M5", "red"]);

console.log(flyweight);

factory.listFlyweights();
