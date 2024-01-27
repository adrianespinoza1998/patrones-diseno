import { EFurnitureType } from "./EFurnitureType";
import { FurnitureStore } from "./FurnitureStore";
import { ModernFurnitureFactory } from "./ModernFurnitureFactory";
import { VictorianFurnitureFactory } from "./VictorianFurnitureFactory";

const type = EFurnitureType.MODERN;

const factory =
  type === EFurnitureType.MODERN
    ? new ModernFurnitureFactory()
    : new VictorianFurnitureFactory();

let store = new FurnitureStore(factory);

store.orderFurniture();

store = new FurnitureStore(new VictorianFurnitureFactory());

store.orderFurniture();
