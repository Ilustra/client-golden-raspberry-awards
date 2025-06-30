import { ChangeDetectorRef, Component } from '@angular/core';
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
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-list-all-movie',
  imports: [CommonModule, WidgetTable, FormsModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
    MatSelectModule, MatProgressBarModule
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
    constructor(protected override service: ListAllMoviesService, protected  cdr: ChangeDetectorRef){
      super(service);
    }

    onYearChange($event: any){
        this.clearPaginated();
        this.selectedYear = $event.target.value

        this.findAll(this.getParam())
    }

    onWinnerChange($event: any){
        this.clearPaginated();
        this.selectedWinner = $event.target.value
         this.findAll(this.getParam())
    }
    onPageSizeChange(){

    }
    onSizeChange ($event: any){
      this.pageable.pageSize = $event.target.value
      this.findAll(this.getParam())
    }
    onPreviousPage(){
        if (this.pageable.pageNumber > 0) {
            this.pageable.pageNumber--; 
        }
         this.findAll(this.getParam())
    }
    onNextPage(){
        if (this.pageData && this.pageable.pageNumber < this.pageData.totalPages - 1) {
            this.pageable.pageNumber++;
           
        }
        this.findAll(this.getParam())
    }
    clearPaginated() {
        this.pageable.pageNumber = 0;
        this.pageable.pageSize = 5;
    }

    getParam(){
        let page = '?page='+ this.pageable.pageNumber +'&size='+this.pageable.pageSize 
        if(this.selectedWinner){
            page+='&winner='+this.selectedWinner
        }
        if(this.selectedYear){
            page+= '&year='+ this.selectedYear
        }
        return page;
    }
}
