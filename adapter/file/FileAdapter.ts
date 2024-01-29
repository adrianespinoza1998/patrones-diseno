import { File_ } from "./File";
import { LocalFile } from "./LocalFile";

export class FileAdapter extends File_ {
  bytes: Uint8Array;
  name: string;
  extension: string;

  constructor(file: LocalFile) {
    super();
    this.bytes = FileAdapter.base64ToArrayBuffer(file.content);
    const splittedPath = file.path.split("/");
    this.name = splittedPath[splittedPath.length - 1];
    this.extension = this.name.split(".")[1];
  }

  static base64ToArrayBuffer(base64: string): Uint8Array {
    return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  }
}
