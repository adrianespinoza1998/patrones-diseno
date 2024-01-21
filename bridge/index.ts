import { MiniTruckEngine } from "./engine/MiniTruckEngine";
import { TruckEngine } from "./engine/TruckEngine";
import { Diesel } from "./fuel/Diesel";
import { Gasoline } from "./fuel/Gasoline";

let miniTruckEngine = new MiniTruckEngine(new Diesel());
miniTruckEngine.load(10);

console.log("====================================");

miniTruckEngine = new MiniTruckEngine(new Gasoline());
miniTruckEngine.load(10);

console.log("====================================");
console.log("====================================");

let truckEngine = new TruckEngine(new Diesel());
truckEngine.load(10);

console.log("====================================");

truckEngine = new TruckEngine(new Gasoline());
truckEngine.load(10);
