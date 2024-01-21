import { IObserver } from "./IObserver";
import { NumberObserver } from "./NumberObserver";
import { Subject } from "./Subject";

const subject = new Subject(0);
const observer = new NumberObserver();
subject.addObserver(observer);
subject.notifyObservers();
subject.setState(1);
subject.setState(10);

setTimeout(() => {
  subject.setState(100);
}, 2000);
