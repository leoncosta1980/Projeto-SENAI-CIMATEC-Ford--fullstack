import { TableService } from './services/table.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap, switchMap, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { merge } from 'rxjs';

const WAIT_TYPING = 300;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  typedValue = '2FRHDUYS2Y63NHD22454';
  tableInput = new FormControl('2FRHDUYS2Y63NHD22454');
   allTable$ = this.tableService.getTable(this.typedValue).pipe(
     tap(()=>{console.log("Fluxo Inicial")
   })
 );

  filterByInput$ = this.tableInput.valueChanges.pipe(
    debounceTime(WAIT_TYPING),
    tap(()=>{console.log("Fluxo do Filtro")}),
    tap(console.log),
    filter((typedValue)=>typedValue.length >= 4 || !typedValue.length),
    distinctUntilChanged(),
    switchMap((typedValue)=>this.tableService.getTable(typedValue))
  );


  Table$ = merge(this.allTable$, this.filterByInput$);
  
  constructor(private tableService: TableService) {

    }
  printTable(value){
    console.log(value)
  }
  }
