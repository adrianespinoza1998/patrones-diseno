import { ISubject } from "./ISubject";
import { RealSubject } from "./RealSubject";

export class Proxy implements ISubject {
  constructor(private realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log("Proxy: Checking access prior to firing a real request.");
    return true;
  }

  private logAccess(): void {
    console.log("Proxy: Logging the time of request.");
  }
}
