import { IDataSource } from "./IDataSource";

export class FileDataSource implements IDataSource {
  data: string;
  constructor() {
    this.data = "";
  }

  writeData(data: string): void {
    this.data = this.data + data;
  }
  readData(): string {
    return this.data;
  }
}
