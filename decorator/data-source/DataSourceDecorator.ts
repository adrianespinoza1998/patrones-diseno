import { IDataSource } from "./IDataSource";

export class DataSourceDecorator implements IDataSource {
  protected wrapper: IDataSource;

  constructor(source: IDataSource) {
    this.wrapper = source;
  }
  writeData(data: string): void {
    this.wrapper.writeData(data);
  }
  readData(): string {
    return this.wrapper.readData();
  }
}
