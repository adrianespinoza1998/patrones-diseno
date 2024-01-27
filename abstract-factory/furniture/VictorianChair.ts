import { IChair } from "./interfaces/IChair";

export class VictorianChair implements IChair {
  hasLegs(): boolean {
    return true;
  }
  sitOn(): void {
    console.log("Sitting on a Victorian chair");
  }
}
