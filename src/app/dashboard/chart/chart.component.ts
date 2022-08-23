import { Component, OnInit } from '@angular/core';
import { ChartService } from './services/chart.service';

declare var google: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private dados: any;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getDados().subscribe(dados => {
      this.dados = dados;
      this.init();
    }
    );
  }

  init(): void {
    if(typeof(google) != 'undefined'){
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.drawChart);
      },1000);
    }
  }

  drawChart(): void {
    this.drawDonutChart();
  }

  drawDonutChart(): void{
    const el = document.getElementById('donutChart');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();

    options['pieHole']=0.4;
    chart.draw(this.getDataTable(), options);
  }

  getDataTable(): any {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(this.dados);
    return data;
  }

  getOptions(): any {
    return{
      'title': 'Título Aqui',
      'width': 400,
      'height': 300
    }
  }

}
