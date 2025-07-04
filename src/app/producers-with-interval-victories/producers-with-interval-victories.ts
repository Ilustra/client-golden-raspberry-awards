import { ChangeDetectorRef, Component } from '@angular/core';
import { TableColumn } from '../model/TableColumn';
import { View } from '../utils/view.component';
import { WidgetTable } from "../widget-table/widget-table";
import { MaxminWinIntervalProducersService } from '../service/maxmin-win-interval-producers-service';
import { CommonModule } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-producers-with-interval-victories',
  imports: [WidgetTable, CommonModule, MatProgressBar],
  templateUrl: './producers-with-interval-victories.html',
  styleUrl: './producers-with-interval-victories.css'
})
export class ProducersWithIntervalVictories extends View<any> {
  title = "Producers with longest and shortest interval between wins";

  dataSourceMin: MatTableDataSource<any>;
  dataSourceMax: MatTableDataSource<any>;

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
        this.dataSourceMin = new MatTableDataSource();
        this.dataSourceMax = new MatTableDataSource();
    }
    override ngOnInit(): void {
       
    }
    override ngAfterViewInit(): void {
      this.service.findAll().subscribe((res: any)=>{
        this.dataSourceMin.data = res.min;
        this.dataSourceMax.data = res.max;
      })
      this.cdr.detectChanges()
    }

}
