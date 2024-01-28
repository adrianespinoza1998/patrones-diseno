export class LatLng {
  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  toString() {
    return `${this.lat},${this.lng}`;
  }
}
