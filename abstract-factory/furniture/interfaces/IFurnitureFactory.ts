import { IChair } from "./IChair";

export interface IFurnitureFactory {
  createChair(): IChair;
}
