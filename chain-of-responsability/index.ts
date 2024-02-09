import { DogHandler } from "./DogHandler";
import { MonkeyHandler } from "./MonkeyHandler";
import { SquirrelHandler } from "./SquirrelHandler";

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);
