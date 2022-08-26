import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VeiculosAPI } from 'models/veiculo.model';
import { environment } from 'src/environments/environment';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor (private httpClient: HttpClient) {  }

  // getVeiculos() {
  //   const resAPI = this.httpClient.get<VeiculosAPI>(`${environment.API_URL}/vehicleModel`);
  //   return resAPI;
  //   }

  public getVeiculos() {
    return this.httpClient.get<VeiculosAPI>(`${environment.API_URL}/vehicleModel`)
      .pipe(pluck('Vehicles'));
}

}
