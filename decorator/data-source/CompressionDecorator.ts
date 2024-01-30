import { DataSourceDecorator } from "./DataSourceDecorator";

export class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    super.writeData(this.compress(data));
  }

  readData(): string {
    return this.decompress(super.readData());
  }

  compress(data: string): string {
    console.log("Compressing data");
    return data;
  }

  decompress(data: string): string {
    console.log("Decompressing data");
    return data;
  }
}
