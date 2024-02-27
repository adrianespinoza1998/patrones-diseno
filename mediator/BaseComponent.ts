import { IMediator } from "./IMediator";

export class BaseComponent {
  protected mediator!: IMediator;

  constructor(mediator?: IMediator) {
    if (mediator) {
      this.mediator = mediator;
    }
  }

  setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }
}
