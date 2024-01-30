import { ICompression } from "./ICompression";

export class CompressionFactory implements ICompression {
  constructor(private compression: ICompression) {}
  compress(input: string): string {
    return this.compression.compress(input);
  }
  decompress(input: string): string {
    return this.compression.decompress(input);
  }
}
