export interface IShape {
  X: number;
  Y: number;
  color: string;

  clone(): this;
}
