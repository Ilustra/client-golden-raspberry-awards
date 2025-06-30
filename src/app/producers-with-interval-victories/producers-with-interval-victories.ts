import { ChangeDetectorRef, Component } from '@angular/core';
import { TableColumn } from '../model/TableColumn';
import { ListAllMoviesService } from '../service/list-all-movies-service';
import { View } from '../utils/view.component';
import { WidgetTable } from "../widget-table/widget-table";

@Component({
  selector: 'app-producers-with-interval-victories',
  imports: [WidgetTable],
  templateUrl: './producers-with-interval-victories.html',
  styleUrl: './producers-with-interval-victories.css'
})
export class ProducersWithIntervalVictories extends View<any> {
  title = "Intervalo de prêmios"
 columns: TableColumn[]=[
      {
        label: "Producer",
        property: "producer",
        type: "text",
        sortable: false,
      },
      {
        label: "Following ",
        property: "followingWin",
        type: "text",
        sortable: false,
      },
      {
        label: "Interval",
        property: "interval",
        type: "text",
        sortable: false,
      },
      {
        label: "Previous",
        property: "previousWin",
        type: "text",
        sortable: false,
      }
      
    ];
    constructor(protected override service: ListAllMoviesService, protected cdr: ChangeDetectorRef){
      super(service);
    }
    override ngOnInit(): void {
       
    }
    override ngAfterViewInit(): void {
      this.cdr.detectChanges()
         this.findAll("?projection=max-min-win-interval-for-producers")
    }

}
