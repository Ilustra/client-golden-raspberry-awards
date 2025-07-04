import { ChangeDetectorRef, Component } from '@angular/core';
import { View } from '../utils/view.component';
import { WidgetTable } from "../widget-table/widget-table";
import { TableColumn } from '../model/TableColumn';
import { CommonModule, NgIf } from '@angular/common';
import { StudioMostWinsService } from '../service/studio-most-wins';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-more-one-winner',
  imports: [WidgetTable, MatProgressBarModule, CommonModule],
  templateUrl: './more-one-winner.html',
  styleUrl: './more-one-winner.css'
})
export class MoreOneWinner extends View<any> {
  title = "List years with multiple winners"
  columns: TableColumn[] = [
    {
      label: "Year",
      property: "year",
      type: "text",
      sortable: false,
    },
    {
      label: "Win Count",
      property: "winnerCount",
      type: "text",
      sortable: false,
    },

  ];
  constructor(protected override service: StudioMostWinsService, protected cdr: ChangeDetectorRef) {
    super(service);
  }
  override ngOnInit(): void {

  }
  override ngAfterViewInit(): void {
    this.findAll()
    this.cdr.detectChanges()
  }

}
