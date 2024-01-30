import { Dot } from "./Dot";

export class Circle extends Dot {
  radius: number;

  constructor(x: number, y: number, radius: number) {
    super(x, y);
    this.radius = radius;
  }

  draw(): void {
    console.log(
      `Drawing a circle at (${this.x}, ${this.y}) with radius ${this.radius}`
    );
  }
}
