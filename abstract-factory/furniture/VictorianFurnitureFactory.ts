import { IChair } from "./interfaces/IChair";
import { IFurnitureFactory } from "./interfaces/IFurnitureFactory";
import { VictorianChair } from "./VictorianChair";

export class VictorianFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new VictorianChair();
  }
}
