import { CompressionDecorator } from "./CompressionDecorator";
import { FileDataSource } from "./FileDataSource";

const source = new FileDataSource();
source.writeData("data");

const compressionSource = new CompressionDecorator(source);
compressionSource.writeData("compressed data");
const data = compressionSource.readData();

console.log(data);
