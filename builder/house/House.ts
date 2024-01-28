export class House {
  doors: number = 0;
  windows: number = 0;
  rooms: number = 0;

  setDoors(doors: number) {
    this.doors = doors;
  }

  setWindows(windows: number) {
    this.windows = windows;
  }

  setRooms(rooms: number) {
    this.rooms = rooms;
  }

  toString(): void {
    console.log(
      `Doors: ${this.doors}, Windows: ${this.windows}, Rooms: ${this.rooms}`
    );
  }
}
