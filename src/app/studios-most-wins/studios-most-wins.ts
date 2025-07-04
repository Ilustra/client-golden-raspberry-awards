import { ChangeDetectorRef, Component } from '@angular/core';
import { View } from '../utils/view.component';
import { TableColumn } from '../model/TableColumn';
import { WidgetTable } from "../widget-table/widget-table";
import { StudioWithWincountService } from '../service/studio-with-wincount-service';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studios-most-wins',
  imports: [WidgetTable, CommonModule, MatProgressBar ],
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
  
      this.loading=true
      this.service.findAll().subscribe((res: any)=>{
        this.subject$.next(this.sortedList(res.studios).slice(0,3));
        setTimeout(() => {
           this.loading=false;
        }, 2000);
      })
      this.cdr.detectChanges()
    }
    sortedList(list: any[]){
      return list
          .sort((a: any, b: any) => b.winCount - a.winCount)
    }
}
