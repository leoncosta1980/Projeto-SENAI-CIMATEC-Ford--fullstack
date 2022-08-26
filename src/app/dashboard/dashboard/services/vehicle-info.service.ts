import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Veiculo } from 'models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleInfoService {

  constructor(private httpClient: HttpClient) { }

  private buildVehicleInfoRequest(vehicleId: number) {
    return `${environment.API_URL}/vehicleModel/${vehicleId}`
  }

  getVehicleInfo(vehicleId: number) {
      const vehicleInfoUrl = this.buildVehicleInfoRequest(vehicleId)

      return this.httpClient.get(
        vehicleInfoUrl
      )
  }

  getAllVehicles(): Promise<any[]> {
    return this.httpClient.get<any[]>( `${environment.API_URL}/vehicleModel`).toPromise()
  }

  getVeiculos() {
    return this.httpClient.get<Veiculo[]>(`${environment.API_URL}/vehicleModel`).pipe();
  }

}
