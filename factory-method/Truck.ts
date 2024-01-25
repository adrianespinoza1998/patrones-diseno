import { Address } from "./Address";
import { ITransportMethod } from "./ITransportMethod";

export class Truck implements ITransportMethod {
  deliver(address: Address) {
    console.log(
      `Delivering by truck to ${address.street}, ${address.city}, ${address.country}`
    );
  }
}
