import { ICommand } from "./ICommand";

export class Invoker {
  private static onStart: ICommand;
  private static onFinish: ICommand;

  public setOnStart(command: ICommand): void {
    Invoker.onStart = command;
  }

  public setOnFinish(command: ICommand): void {
    Invoker.onFinish = command;
  }

  public doSomethingImportant(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.isCommand(Invoker.onStart)) {
      Invoker.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.isCommand(Invoker.onFinish)) {
      Invoker.onFinish.execute();
    }
  }

  private isCommand(object: any): object is ICommand {
    return object.execute !== undefined;
  }
}
