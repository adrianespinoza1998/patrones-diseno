import { GoogleMapBuilder } from "./GoogleMapBuilder";

class GoogleMapBuilderImpl extends GoogleMapBuilder {
  setCurrentLocation() {
    this.map.setCurrentLocation(37.497, 127.02761);
  }

  setMarkerColor() {
    this.map.setMarkerColor("blue");
  }
}

let mapBuilder = new GoogleMapBuilderImpl();
mapBuilder.build();
