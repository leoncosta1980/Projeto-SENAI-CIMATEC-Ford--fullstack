import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { DadosService } from './services/dados.service';


@NgModule({
  declarations: [
    ChartComponent
  ],
  providers:[
    DadosService],
  imports: [
    CommonModule
  ],
  exports: [ChartComponent],
})
export class ChartModule { }
