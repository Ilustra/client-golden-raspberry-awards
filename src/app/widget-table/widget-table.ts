import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableColumn } from '../model/TableColumn';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-widget-table',
  imports: [MatTableModule, MatPaginatorModule,CommonModule, MatCardModule,
    FormsModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule,
    MatSelectModule
  ],
  templateUrl: './widget-table.html',
  styleUrl: './widget-table.css',
})
export class WidgetTable<T> implements OnInit, OnChanges, AfterViewInit {
  @Input() messageData="No results found"
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
  getValue(row: any, property: string): any {
  return  row[property];
  }
  onColumnChange(column: TableColumn, event: any) {
    if (column.onChange) {
      column.onChange(event);
    }
  }
}
