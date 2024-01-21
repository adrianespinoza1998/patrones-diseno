import { TouristicPackageDecorator } from "./TouristicPackageDecorator";

export class TouristicPackageHotelDecorator extends TouristicPackageDecorator {
  getPrice(): number {
    return super.getPrice() + 50;
  }

  getPerks(): string[] {
    return super.getPerks().concat(["Hotel"]);
  }
}
