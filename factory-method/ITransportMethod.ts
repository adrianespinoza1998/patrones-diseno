import { Address } from "./Address";

export interface ITransportMethod {
  deliver(address: Address): void;
}
