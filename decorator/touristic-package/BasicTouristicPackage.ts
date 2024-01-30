import { ITouristicPackage } from "./ITouristicPackage";

export class BasicTouristicPackage implements ITouristicPackage {
  getPrice(): number {
    return 100;
  }

  getPerks(): string[] {
    return ["Visit to the museum"];
  }
}
