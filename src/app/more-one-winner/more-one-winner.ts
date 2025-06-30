import { ChangeDetectorRef, Component } from '@angular/core';
import { View } from '../utils/view.component';
import { ListAllMoviesService } from '../service/list-all-movies-service';
import { WidgetTable } from "../widget-table/widget-table";
import { TableColumn } from '../model/TableColumn';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-more-one-winner',
  imports: [WidgetTable, NgIf],
  templateUrl: './more-one-winner.html',
  styleUrl: './more-one-winner.css'
})
export class MoreOneWinner extends View<any> {
    title="Anos com mais de um vencedor"
    columns: TableColumn[]=[
      {
        label: "Year",
        property: "year",
        type: "text",
        sortable: false,
      },
      {
        label: "Title",
        property: "winnerCount",
        type: "text",
        sortable: false,
      },
      
    ];
    constructor(protected override service: ListAllMoviesService, protected cdr: ChangeDetectorRef){
      super(service);
    }
    override ngOnInit(): void {
       
    }
    override ngAfterViewInit(): void {
      this.cdr.detectChanges()
         this.findAll("?projection=years-with-multiple-winners")
    }

}
