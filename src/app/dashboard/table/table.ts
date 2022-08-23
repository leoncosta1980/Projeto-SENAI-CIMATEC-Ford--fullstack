export interface Table extends Array<Table>{
}

export interface Table{
  vehicle_vin: String;
  odometer: number;
  fuel_level: number;
  vehicle_status: String;
  latitude: number;
  longitude: number;
}

export interface TableAPI {
  vehicleData: Table[];
}
