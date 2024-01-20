import { WindowsButton } from "../button/WindowsButton";
import { IButton } from "../interfaces/IButton";
import { ITextField } from "../interfaces/ITextField";
import { IUIComponentsAbstractFactory } from "../interfaces/IUIComponentsAbstractFactory";
import { WindowsTextField } from "../textfield/WindowsTextField";

export class WindowsUIComponentsFactory
  implements IUIComponentsAbstractFactory
{
  createButton(): IButton {
    return new WindowsButton();
  }
  createTextField(): ITextField {
    return new WindowsTextField();
  }
}
