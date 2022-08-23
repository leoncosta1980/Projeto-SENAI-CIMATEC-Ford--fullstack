import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { VehicleInfoService } from './services/vehicle-info.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  initialVehicleId = 1

  allVehicles = [];

  vehicleId = new FormControl(this.initialVehicleId)

  initialVehicleInfo$ = this.vehicleInfoService.getVehicleInfo(this.initialVehicleId).pipe();

  vehicleInfo$ = this.vehicleId.valueChanges.pipe(
    switchMap((value) => this.vehicleInfoService.getVehicleInfo(value)),
    tap(console.log),
  )

  constructor(private vehicleInfoService: VehicleInfoService) { }

  async ngOnInit(): Promise<void> {
    this.allVehicles = await this.vehicleInfoService.getAllVehicles();
  }

  getImageUrl(value){
    console.log('getImageUrl', value);
    return `assets/img/${value.vehicle_Model.toLowerCase().replace(' ', '')}.png`;
  }

  vehicleInfos$ = merge(this.initialVehicleInfo$, this.vehicleInfo$);

}
