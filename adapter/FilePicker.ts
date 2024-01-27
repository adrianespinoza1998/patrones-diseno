import { LocalFile } from "./LocalFile";

export class FilePicker {
  static pick(): LocalFile {
    return new LocalFile("content", "path");
  }
}
