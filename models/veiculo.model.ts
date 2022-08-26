export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo {
  id_vehicle_Model: number;
  vehicle_Model: string;
  vehicle_Sales: number;
  vehicle_Connected: number;
  vehicle_SoftwareUpdate: number;
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
