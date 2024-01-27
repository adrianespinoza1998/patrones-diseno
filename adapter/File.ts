export abstract class File_ {
  abstract bytes: Uint8Array;
  abstract name: string;
  abstract extension: string;
  toString(): string {
    return `${this.name}.${this.extension}`;
  }
}
