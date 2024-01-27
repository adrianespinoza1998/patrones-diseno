import { IFurnitureFactory } from "./interfaces/IFurnitureFactory";
import { ModernChair } from "./ModernChair";

export class ModernFurnitureFactory implements IFurnitureFactory {
  createChair() {
    return new ModernChair();
  }
}
