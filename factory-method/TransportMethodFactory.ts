import { Boat } from "./Boat";
import { ETransportationType } from "./ETransportationType";
import { ITransportMethod } from "./ITransportMethod";
import { Truck } from "./Truck";

export abstract class TransportMethodFactory {
  abstract createITransportMethod(): ITransportMethod;
  static fromETransportationType(type: ETransportationType): ITransportMethod {
    switch (type) {
      case ETransportationType.EARTH:
        return new Truck();
      case ETransportationType.SEA:
        return new Boat();
      default:
        throw new Error("Invalid transportation type");
    }
  }
}
