import { ChangeDetectorRef, Component } from '@angular/core';
import { View } from '../utils/view.component';
import { TableColumn } from '../model/TableColumn';
import { WidgetTable } from "../widget-table/widget-table";
import { StudioWithWincountService } from '../service/studio-with-wincount-service';

@Component({
  selector: 'app-studios-most-wins',
  imports: [WidgetTable],
  templateUrl: './studios-most-wins.html',
  styleUrl: './studios-most-wins.css'
})
export class StudiosMostWins extends View<any> {
    title="Top 3 studios with winners"
   columns: TableColumn[]=[
      {
        label: "Name",
        property: "name",
        type: "text",
        sortable: false,
      },
      {
        label: "Win Count",
        property: "winCount",
        type: "text",
        sortable: false,
      },
     
      
    ];
    constructor(protected override service: StudioWithWincountService, protected cdr: ChangeDetectorRef){
      super(service);
    }
    override ngOnInit(): void {
       
    }
    override ngAfterViewInit(): void {
      this.cdr.detectChanges()
      this.findAll()
    }
}
