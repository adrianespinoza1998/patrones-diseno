import { RoundPeg } from "./RoundPeg";

export class RoundHole {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  fits(peg: RoundPeg): boolean {
    return this.radius >= peg.radius;
  }
}
