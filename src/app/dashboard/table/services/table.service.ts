import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table } from '../table';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor(private httpClient:HttpClient) { }


  getTable(valor?: string){
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
    .get<Table[]>(`http://localhost:3001/vehicleData/`, { params });
  }


}
