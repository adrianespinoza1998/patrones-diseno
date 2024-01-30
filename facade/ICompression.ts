export interface ICompression {
  compress(input: string): string;
  decompress(input: string): string;
}
