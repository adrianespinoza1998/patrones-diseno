import { ITextField } from "../interfaces/ITextField";

export class MacOSTextField implements ITextField {
  render(): void {
    console.log("MacOS TextField");
  }
}
