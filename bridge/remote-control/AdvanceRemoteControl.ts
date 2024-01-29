import { IDevice } from "./IDevice";
import { RemoteControl } from "./RemoteControl";

export class AdvanceRemoteControl extends RemoteControl {
  volumenBeforeMute: number;

  constructor(device: IDevice) {
    super(device);
    this.volumenBeforeMute = 0;
  }

  mute(): void {
    this.volumenBeforeMute = this.device.getVolume();
    this.device.setVolume(0);
  }

  unmute(): void {
    this.device.setVolume(this.volumenBeforeMute);
  }
}
