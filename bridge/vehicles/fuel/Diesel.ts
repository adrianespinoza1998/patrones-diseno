import { IFuel } from "./IFuel";

export class Diesel implements IFuel {
  name(): string {
    return "Diesel";
  }

  price(): number {
    return 1.2;
  }
}
