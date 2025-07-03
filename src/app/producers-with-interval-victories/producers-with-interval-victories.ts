import { ChangeDetectorRef, Component } from '@angular/core';
import { TableColumn } from '../model/TableColumn';
import { View } from '../utils/view.component';
import { WidgetTable } from "../widget-table/widget-table";
import { MaxminWinIntervalProducersService } from '../service/maxmin-win-interval-producers-service';

@Component({
  selector: 'app-producers-with-interval-victories',
  imports: [WidgetTable],
  templateUrl: './producers-with-interval-victories.html',
  styleUrl: './producers-with-interval-victories.css'
})
export class ProducersWithIntervalVictories extends View<any> {
  title = "Producers with longest and shortest interval between wins"
 columns: TableColumn[]=[
      {
        label: "Producer",
        property: "producer",
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
        label: "Previous Year",
        property: "previousWin",
        type: "text",
        sortable: false,
      },
      {
        label: "Following Year",
        property: "followingWin",
        type: "text",
        sortable: false,
      }
      
    ];
   
    constructor(protected override service: MaxminWinIntervalProducersService, protected cdr: ChangeDetectorRef){
      super(service);
    }
    override ngOnInit(): void {
       
    }
    override ngAfterViewInit(): void {
      this.cdr.detectChanges()
         this.findAll()
    }

}
