import { Address } from "./Address";
import { ITransportMethod } from "./ITransportMethod";

export class Boat implements ITransportMethod {
  deliver(address: Address) {
    console.log(
      `Delivering by boat to ${address.street}, ${address.city}, ${address.country}`
    );
  }
}
