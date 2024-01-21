import { IObserver } from "./IObserver";

export class NumberObserver implements IObserver<number> {
  update(state: number): void {
    console.log(`NumberObserver: ${state}`);
  }
}
