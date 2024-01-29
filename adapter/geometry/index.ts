import { RoundHole } from "./RoundHole";
import { RoundPeg } from "./RoundPeg";
import { SquarePeg } from "./SquarePeg";
import { SquarePegAdapter } from "./SquarePegAdapter";

const hole = new RoundHole(5);
const peg = new RoundPeg(5);

hole.fits(peg);

const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);

// Uncomment the following lines to see the error
// hole.fits(smallSquarePeg);

const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);

hole.fits(smallSquarePegAdapter);
hole.fits(largeSquarePegAdapter);
