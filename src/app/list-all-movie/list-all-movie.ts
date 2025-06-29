import { Component } from '@angular/core';
import { View } from '../utils/view.component';
import { Movie } from '../model/movie';
import { ListAllMoviesService } from '../service/list-all-movies-service';
import { CommonModule } from '@angular/common';
import { TableColumn } from '../model/TableColumn';
import { WidgetTable } from "../widget-table/widget-table";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-list-all-movie',
  imports: [CommonModule, WidgetTable, FormsModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
    MatSelectModule
   ],
  templateUrl: './list-all-movie.html',
  styleUrl: './list-all-movie.css'
})
export class ListAllMovie extends View<Movie> {
    columns: TableColumn[]=[
      {
        label: "Year",
        property: "year",
        type: "text",
        sortable: false,
      },
      {
        label: "Title",
        property: "title",
        type: "text",
        sortable: false,
      },
      {
        label: "Studios",
        property: "studios",
        type: "text",
        sortable: false,
      },
      {
        label: "Producer",
        property: "producers",
        type: "text",
        sortable: false,
      },
      {
        label: "Winner",
        property: "winner",
        type: "text",
        sortable: false,
      }
    ];
    constructor(protected override service: ListAllMoviesService){
      super(service);
    }
}
