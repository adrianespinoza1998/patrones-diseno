import { FileAdapter } from "./FileAdapter";
import { FilePicker } from "./FilePicker";
import { FileUploader } from "./FileUploader";

const pickedFile = FilePicker.pick();
new FileUploader().upload(new FileAdapter(pickedFile));
