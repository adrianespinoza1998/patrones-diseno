import { IButton } from "../interfaces/IButton";

export class MacOSButton implements IButton {
  render(): void {
    console.log("MacOS Button");
  }
}
