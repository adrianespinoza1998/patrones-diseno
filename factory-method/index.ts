import { Address } from "./Address";
import { ETransportationType } from "./ETransportationType";
import { EarthTransportMethodFactory } from "./EarthTransportMethodFactory";
import { SeaTransportMethodFactory } from "./SeaTransportMethodFactory";
import { TransportMethodFactory } from "./TransportMethodFactory";

const earthFactory = new EarthTransportMethodFactory();
const transportMethod = earthFactory.createITransportMethod();

transportMethod.deliver(new Address("1234", "São Paulo", "Brazil"));

const seaFactory = new SeaTransportMethodFactory();
const seaTransportMethod = seaFactory.createITransportMethod();

seaTransportMethod.deliver(new Address("1234", "São Paulo", "Brazil"));

const unknownITransportMethod = TransportMethodFactory.fromETransportationType(
  ETransportationType.EARTH
);

unknownITransportMethod.deliver(new Address("1234", "São Paulo", "Brazil"));
