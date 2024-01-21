import { ITouristicPackage } from "./ITouristicPackage";

export abstract class TouristicPackageDecorator implements ITouristicPackage {
  constructor(private readonly touristicPackage: ITouristicPackage) {}

  getPrice(): number {
    return this.touristicPackage.getPrice();
  }

  getPerks(): string[] {
    return this.touristicPackage.getPerks();
  }
}
