import { Component, Input, OnInit } from '@angular/core';
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

  // vehicles: VehicleInterface;

  @Input()
  selected: Vehicle;

  private data;

  private data2;

  constructor(private vehicleInfoService: VehicleInfoService) {

    // this.vehicleInfoService.getVeiculos().subscribe((resAPI) => {
    //   console.log('resAPI', resAPI)
      //this.vehicles = resAPI[0];
      //this.selected = this.vehicles[0];


    // });


   }

  ngOnInit():void {
    this.refreshChartData();
  }

  ngOnChanges() {
    this.refreshChartData()
  }

  refreshChartData() {
    console.log('refreshChartData selected', this.selected);
    connected = +this.selected.vehicle_Connected;
    notConnected = +this.selected.vehicle_Sales - +this.selected.vehicle_Connected;
    updated = +this.selected.vehicle_SoftwareUpdate;
    notUpdated = +this.selected.vehicle_Sales - +this.selected.vehicle_SoftwareUpdate;

    this.data = [
      ['Conectados', +connected],
      ['Não conectados', notConnected],
    ];

    this.data2 = [
      ['Atualizados', +updated],
      ['Não Atualizados', notUpdated],
    ];
    this.drawChart();
  }

  drawChart(): void {
    const self = this;
    if(typeof(google) != 'undefined'){
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(() => {
          console.log('drawChart');
          self.drawDonutChart();
          self.drawDonutChart2();
        });
      },1000);
    }
  }


  drawDonutChart(){
    console.log('drawDonutChart');
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();

    options['pieHole']=0.6;
    chart.draw(this.getDataTable(), options);
  }

  drawDonutChart2(){
    const el = document.getElementById('donut_chart2');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();

    options['pieHole']=0.6;
    chart.draw(this.getDataTable2(), options);
  }

  getDataTable(): any {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Período');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.data);
    return data;
  }

  getDataTable2(): any {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Período');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.data2);
    return data;
  }

  getOptions(): any {
    return{
      'width': 250,
      'height': 150
    }
  }

}
