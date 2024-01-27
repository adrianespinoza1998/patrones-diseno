import { File_ } from "./File";
import { IUploadFile } from "./IUploadFile";

export class FileUploader implements IUploadFile {
  upload(file: File_): void {
    console.log(`Uploading ${file.name}`);
  }
}
