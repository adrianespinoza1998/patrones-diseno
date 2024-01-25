import { GoogleMap } from "./GoogleMap";

export abstract class GoogleMapBuilder {
  protected map: GoogleMap = new GoogleMap();

  build() {
    this.setCurrentLocation();
    this.setMarkerColor();
    this.map.showProperties();
  }

  abstract setCurrentLocation(): void;
  abstract setMarkerColor(): void;
}
