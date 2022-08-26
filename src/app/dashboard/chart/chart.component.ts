import { Component, OnInit } from '@angular/core';
import { VehicleInfoService } from '../dashboard/services/vehicle-info.service';
import { Vehicle, VehicleInterface } from 'src/app/models/vehicle-interface';


declare var google: any;

var connected = 1;
var notConnected = 1;
var updated = 1;
var notUpdated = 1;
var data = [];
var data2 = [];


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  vehicles: VehicleInterface;
  selected: Vehicle;

  private dados: any;

  constructor(private vehicleInfoService: VehicleInfoService) {

    this.vehicleInfoService.getVeiculos().subscribe((resAPI) => {
      this.vehicles = resAPI[0];
      this.selected = this.vehicles[0];

    connected = +this.selected.vehicle_Connected;
    notConnected = +this.selected.vehicle_Sales - +this.selected.vehicle_Connected;
    updated = +this.selected.vehicle_SoftwareUpdate;
    notUpdated = +this.selected.vehicle_Sales - +this.selected.vehicle_SoftwareUpdate;

    data = [
      ['Conectados', +connected],
      ['Não conectados', notConnected],
    ];

    data2 = [
      ['Atualizados', +updated],
      ['Não Atualizados', notUpdated],
    ];
      this.init();
    });


   }

  ngOnInit():void {}
  init(): void {
    if(typeof(google) != 'undefined'){
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.drawChart);
      },1000);
    }
  }

  drawChart(): any {
    this.drawDonutChart();
    this.drawDonutChart2();
  }

  drawDonutChart(){
    const el = document.getElementById('donutChart');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();

    options['pieHole']=0.4;
    chart.draw(this.getDataTable(), options);
  }

  drawDonutChart2(){
    const el = document.getElementById('donutChart2');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();

    options['pieHole']=0.4;
    chart.draw(this.getDataTable2(), options);
  }

  getDataTable(): any {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Período');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);
    return data;
  }

  getDataTable2(): any {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Período');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);
    return data;
  }

  getOptions(): any {
    return{
      'width': 400,
      'height': 300
    }
  }

}
