import { ChartModule } from './chart/chart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModule } from '../common/components/menu/menu.module';
import { MainModule } from '../home/main.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenuModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule
  ],
  exports: [DashboardComponent, TableComponent],
})
export class DashboardModule { }
