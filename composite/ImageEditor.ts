import { Circle } from "./Circle";
import { CompoundGraphic } from "./CompoundGraphic";
import { Dot } from "./Dot";

export class ImageEditor {
  all: CompoundGraphic;

  constructor() {
    this.all = new CompoundGraphic();
  }

  load(): void {
    this.all.add(new Dot(1, 2));
    this.all.add(new Circle(5, 3, 10));
  }

  groupSelected(components: CompoundGraphic[]): void {
    const group = new CompoundGraphic();
    for (let component of components) {
      group.add(component);
      this.all.remove(component);
    }
    this.all.add(group);
    this.all.draw();
  }
}
