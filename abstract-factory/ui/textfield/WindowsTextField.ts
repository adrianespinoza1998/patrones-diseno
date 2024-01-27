import { ITextField } from "../interfaces/ITextField";

export class WindowsTextField implements ITextField {
  render(): void {
    console.log("Windows TextField");
  }
}
