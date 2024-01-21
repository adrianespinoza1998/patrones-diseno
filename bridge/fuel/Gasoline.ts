import { IFuel } from "./IFuel";

export class Gasoline implements IFuel {
  name(): string {
    return "Gasoline";
  }

  price(): number {
    return 1.5;
  }
}
