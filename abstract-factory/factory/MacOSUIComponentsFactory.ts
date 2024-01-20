import { MacOSButton } from "../button/MacOSButton";
import { IButton } from "../interfaces/IButton";
import { ITextField } from "../interfaces/ITextField";
import { IUIComponentsAbstractFactory } from "../interfaces/IUIComponentsAbstractFactory";
import { MacOSTextField } from "../textfield/MacOSTextField";

export class MacOSUIComponentsFactory implements IUIComponentsAbstractFactory {
  createButton(): IButton {
    return new MacOSButton();
  }
  createTextField(): ITextField {
    return new MacOSTextField();
  }
}
