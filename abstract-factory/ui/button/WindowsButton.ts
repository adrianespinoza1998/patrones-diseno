import { IButton } from "../interfaces/IButton";

export class WindowsButton implements IButton {
  render(): void {
    console.log("Windows Button");
  }
}
