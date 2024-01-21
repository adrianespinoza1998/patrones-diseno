import { IObserver } from "./IObserver";

export class Subject<T> {
  state: T;
  obervers: IObserver<T>[];

  constructor(state: T) {
    this.state = state;
    this.obervers = [];
  }

  addObserver(observer: IObserver<T>): void {
    this.obervers.push(observer);
  }

  removeObserver(observer: IObserver<T>): void {
    this.obervers = this.obervers.filter((obs) => obs !== observer);
  }

  notifyObservers(): void {
    this.obervers.forEach((observer) => observer.update(this.state));
  }
  setState(state: T): void {
    this.state = state;
    this.notifyObservers();
  }
}
