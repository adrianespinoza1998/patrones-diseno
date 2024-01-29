import { Shape } from "./Shape";

export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(
    x: number,
    y: number,
    color: string,
    width: number,
    height: number
  ) {
    super(x, y, color);
    this.width = width;
    this.height = height;
  }

  clone(): this {
    return this;
  }
}
