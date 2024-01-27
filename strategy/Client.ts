export class Client {
  pendingDebt: number;
  constructor(pendingDebt: number) {
    this.pendingDebt = pendingDebt;
  }
  isUpToDate(): boolean {
    return this.pendingDebt === 0;
  }
}
