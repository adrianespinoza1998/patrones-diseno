import { Caretaker } from "./Caretaker";
import { Originator } from "./Originator";

const originator = new Originator("a");
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.showHistory();

caretaker.undo();
caretaker.undo();

caretaker.showHistory();
