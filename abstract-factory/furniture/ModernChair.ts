import { IChair } from "./interfaces/IChair";

export class ModernChair implements IChair {
  hasLegs(): boolean {
    return true;
  }
  sitOn(): void {
    console.log("Sitting on a modern chair");
  }
}
