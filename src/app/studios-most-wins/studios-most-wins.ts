import { ChangeDetectorRef, Component } from '@angular/core';
import { View } from '../utils/view.component';
import { TableColumn } from '../model/TableColumn';
import { ListAllMoviesService } from '../service/list-all-movies-service';
import { WidgetTable } from "../widget-table/widget-table";

@Component({
  selector: 'app-studios-most-wins',
  imports: [WidgetTable],
  templateUrl: './studios-most-wins.html',
  styleUrl: './studios-most-wins.css'
})
export class StudiosMostWins extends View<any> {
    title="Estúdios"
   columns: TableColumn[]=[
      {
        label: "Name",
        property: "name",
        type: "text",
        sortable: false,
      },
      {
        label: "Win",
        property: "winCount",
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
      this.findAll("?projection=studios-with-win-count")
    }
}
