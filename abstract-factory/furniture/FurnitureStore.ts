import { IFurnitureFactory } from "./interfaces/IFurnitureFactory";

export class FurnitureStore {
  private factory: IFurnitureFactory;

  constructor(factory: IFurnitureFactory) {
    this.factory = factory;
  }

  public orderFurniture() {
    const chair = this.factory.createChair();
    chair.sitOn();
  }
}
