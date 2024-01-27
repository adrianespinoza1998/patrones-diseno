import { IButton } from "./IButton";
import { ITextField } from "./ITextField";

export interface IUIComponentsAbstractFactory {
  createButton(): IButton;
  createTextField(): ITextField;
}
