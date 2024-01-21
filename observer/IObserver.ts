export interface IObserver<T> {
  update: (state: T) => void;
}
