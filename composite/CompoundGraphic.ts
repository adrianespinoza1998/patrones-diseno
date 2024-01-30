import { IGraphic } from "./IGraphic";

export class CompoundGraphic implements IGraphic {
  children: IGraphic[];

  constructor() {
    this.children = [];
  }

  add(child: IGraphic): void {
    this.children.push(child);
  }

  remove(child: IGraphic): void {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  move(x: number, y: number): void {
    for (let child of this.children) {
      child.move(x, y);
    }
  }
  draw(): void {
    for (let child of this.children) {
      child.draw();
    }
  }
}
