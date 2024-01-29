import { IDevice } from "./IDevice";

export class RemoteControl {
  protected device: IDevice;

  constructor(device: IDevice) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}
