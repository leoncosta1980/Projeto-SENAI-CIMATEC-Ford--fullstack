export interface VehicleInterface extends Array<Vehicle> {}

export interface Vehicle {
  id: number | string;
  model: string;
  vehicle_Sales: number | string;
  vehicle_Connected: number | string;
  vehicle_SoftwareUpdate: number | string;
}

export interface VeiculosAPI {
  Vehicles: Vehicle;
}
