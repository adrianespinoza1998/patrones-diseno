import { CompressionFactory } from "./CompressionFactory";
import { MPEG4CompresionCodec } from "./MPEG4CompressionCodec";
import { OggCompresionCodec } from "./OggCompresionCodec";
import { VideoFile } from "./VideoFile";

export class VideoConverter {
  convert(fileName: string, format: string): string {
    let file = new VideoFile(fileName);
    if (format === "mp4") {
      const sourceCodec = new CompressionFactory(new OggCompresionCodec());
      return sourceCodec.compress(file.getName());
    } else {
      const sourceCodec = new CompressionFactory(new MPEG4CompresionCodec());
      return sourceCodec.compress(file.getName());
    }
  }
}
