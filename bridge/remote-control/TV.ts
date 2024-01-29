import { IDevice } from "./IDevice";

export class TV implements IDevice {
  status: boolean;
  volumen: number;
  channel: number;

  constructor() {
    this.status = false;
    this.volumen = 0;
    this.channel = 0;
  }

  isEnabled(): boolean {
    return this.status;
  }
  enable(): void {
    this.status = true;
  }
  disable(): void {
    this.status = false;
  }
  getVolume(): number {
    return this.volumen;
  }
  setVolume(percent: number): void {
    this.volumen = percent;
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
}
