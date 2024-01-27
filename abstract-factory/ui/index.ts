import { EOS } from "./EOS";
import { MacOSUIComponentsFactory } from "./factory/MacOSUIComponentsFactory";
import { WindowsUIComponentsFactory } from "./factory/WindowsUIComponentsFactory";

class Platform {
  public static getOS(): EOS {
    return EOS.Windows;
  }
}

const factory =
  Platform.getOS() === EOS.Windows
    ? new WindowsUIComponentsFactory()
    : new MacOSUIComponentsFactory();

factory.createButton().render();
