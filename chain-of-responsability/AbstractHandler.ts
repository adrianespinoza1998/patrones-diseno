import { IHandler } from "./IHandler";

export abstract class AbstractHandler implements IHandler {
  private static nextHandler: IHandler;
  setNext(handler: IHandler): IHandler {
    AbstractHandler.nextHandler = handler;

    return handler;
  }
  handle(request: string): string {
    if (AbstractHandler.nextHandler) {
      return AbstractHandler.nextHandler.handle(request);
    }

    return "";
  }
}
