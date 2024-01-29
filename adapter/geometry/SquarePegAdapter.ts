import { RoundPeg } from "./RoundPeg";
import { SquarePeg } from "./SquarePeg";

export class SquarePegAdapter extends RoundPeg {
  private peg: SquarePeg;

  constructor(peg: SquarePeg) {
    super(peg.width);
    this.peg = peg;
  }

  getRadius(): number {
    return (this.peg.width * Math.sqrt(2)) / 2;
  }
}
