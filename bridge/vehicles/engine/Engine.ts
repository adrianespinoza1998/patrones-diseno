import { IFuel } from "../fuel/IFuel";

export abstract class Engine {
  fuel: IFuel;
  constructor(fuel: IFuel) {
    this.fuel = fuel;
  }

  load(liter: number): void {
    console.log(`Loading ${liter} liter(s) of ${this.fuel.name()}`);
    console.log(`Total price: ${this.fuel.price() * liter}`);
    console.log(`Total km: ${this.kmPerLiter() * liter}`);
  }
  kmPerLiter(): number {
    return 10;
  }
}
