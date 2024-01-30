export class VideoFile {
  private name: string;
  private codecType: string;

  constructor(name: string) {
    this.name = name;
    this.codecType = name.split(".").pop() || "";
  }

  getName(): string {
    return this.name;
  }

  getCodecType(): string {
    return this.codecType;
  }
}
