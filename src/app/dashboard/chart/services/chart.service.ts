import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  getDados():Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
  dados(dados: any) {
    throw new Error('Method not implemented.');
  }
}
