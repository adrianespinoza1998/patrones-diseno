import { BasicTouristicPackage } from "./BasicTouristicPackage";
import { TouristicPackageBoatDecorator } from "./TouristicPackageBoatDecorator";
import { TouristicPackageHotelDecorator } from "./TouristicPackageHotelDecorator";

const basicTouristicPackage = new BasicTouristicPackage();
console.log(basicTouristicPackage.getPrice());
console.log(basicTouristicPackage.getPerks());

const boatTravelDecorated = new TouristicPackageBoatDecorator(
  basicTouristicPackage
);

console.log(boatTravelDecorated.getPrice());
console.log(boatTravelDecorated.getPerks());

const fullDecorated = new TouristicPackageHotelDecorator(boatTravelDecorated);

console.log(fullDecorated.getPrice());
console.log(fullDecorated.getPerks());
