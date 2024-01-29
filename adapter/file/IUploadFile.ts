import { File_ } from "./File";

export interface IUploadFile {
  upload(file: File_): void;
}
