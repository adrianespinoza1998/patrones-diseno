import { Rectangle } from "./Rectangle";

const rectangle = new Rectangle(10, 20, "red", 100, 200);

const rectangleClone = rectangle.clone();

console.log(
  `Compare rectangle and rectangleClone: ${rectangle === rectangleClone}`
);
