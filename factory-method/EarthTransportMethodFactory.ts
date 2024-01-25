import { ITransportMethod } from "./ITransportMethod";
import { TransportMethodFactory } from "./TransportMethodFactory";
import { Truck } from "./Truck";

export class EarthTransportMethodFactory extends TransportMethodFactory {
  createITransportMethod(): ITransportMethod {
    return new Truck();
  }
}
