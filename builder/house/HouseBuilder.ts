import { House } from "./House";

export abstract class HouseBuilder {
  protected house: House = new House();
  build() {
    this.setDoors();
    this.setWindows();
    this.setRooms();
    this.house.toString();
  }

  abstract setDoors(): void;
  abstract setWindows(): void;
  abstract setRooms(): void;
}
