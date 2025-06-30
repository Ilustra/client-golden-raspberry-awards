import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableColumn } from '../model/TableColumn';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-widget-table',
  imports: [MatTableModule, MatPaginatorModule,CommonModule, MatCardModule],
  templateUrl: './widget-table.html',
  styleUrl: './widget-table.css',
})
export class WidgetTable<T> implements OnInit, OnChanges, AfterViewInit {
  @Input() title = ""
  @Input() dataSource: MatTableDataSource<T, MatPaginator>;
  @Input() columns: TableColumn[] = [];
  visibleColumns?: Array<keyof T | string>;
  constructor(){
   this.dataSource = new MatTableDataSource<any>([]);
  }
  ngAfterViewInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.visibleColumns = this.columns.map(column => column.property);
    }

  }
  ngOnInit(): void {
    
  }
}
