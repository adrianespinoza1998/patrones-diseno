import { LatLng } from "./LatLng";

export class GoogleMap {
  markerColor: string = "";
  currentLocation: LatLng = new LatLng(0, 0);

  setMarkerColor(color: string) {
    this.markerColor = color;
  }

  setCurrentLocation(lat: number, lng: number) {
    this.currentLocation = new LatLng(lat, lng);
  }

  showProperties() {
    console.log(`Marker Color: ${this.markerColor}`);
    console.log(`Current Location: ${this.currentLocation}`);
  }
}
