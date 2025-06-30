import { ChangeDetectorRef, Component } from '@angular/core';
import { View } from '../utils/view.component';
import { TableColumn } from '../model/TableColumn';
import { ListAllMoviesService } from '../service/list-all-movies-service';
import { WidgetTable } from "../widget-table/widget-table";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-winners-by-year',
  imports: [WidgetTable, CommonModule, WidgetTable, FormsModule, MatButtonModule, MatDividerModule, FormsModule, MatFormFieldModule, MatInputModule
  ],
  templateUrl: './winners-by-year.html',
  styleUrl: './winners-by-year.css'
})
export class WinnersByYear extends View<any> {
  title = "Filme por Ano"
  columns: TableColumn[] = [
    {
      label: "title",
      property: "title",
      type: "text",
      sortable: false,
    },
    {
      label: "producers",
      property: "producers",
      type: "text",
      sortable: false,
    },
    {
      label: "studios",
      property: "studios",
      type: "text",
      sortable: false,
    },
    {
      label: "winner",
      property: "winner",
      type: "text",
      sortable: false,
    }
    ,
    {
      label: "year",
      property: "year",
      type: "text",
      sortable: false,
    }


  ];
  constructor(protected override service: ListAllMoviesService, protected cdr: ChangeDetectorRef) {
    super(service);
  }
  override ngOnInit(): void {

  }
  override ngAfterViewInit(): void {
    this.cdr.detectChanges()
    this.findAll("?winner=true&year=1980")
  }
    onYearChange($event: any) {
    this.findAll("?winner=true&year=" + $event.target.value)
  }
}
