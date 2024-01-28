import { House } from "./House";
import { HouseBuilder } from "./HouseBuilder";

export class HouseBuilderImpl extends HouseBuilder {
  setDoors() {
    this.house.setDoors(2);
  }
  setWindows() {
    this.house.setWindows(4);
  }
  setRooms() {
    this.house.setRooms(3);
  }
}
