import { Boat } from "./Boat";
import { ITransportMethod } from "./ITransportMethod";
import { TransportMethodFactory } from "./TransportMethodFactory";

export class SeaTransportMethodFactory extends TransportMethodFactory {
  createITransportMethod(): ITransportMethod {
    return new Boat();
  }
}
