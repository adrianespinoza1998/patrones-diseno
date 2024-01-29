import { IShape } from "./IShape";

export class Shape implements IShape {
  X: number;
  Y: number;
  color: string;

  constructor(x: number, y: number, color: string) {
    this.X = x;
    this.Y = y;
    this.color = color;
  }

  clone(): this {
    return this;
  }
}
