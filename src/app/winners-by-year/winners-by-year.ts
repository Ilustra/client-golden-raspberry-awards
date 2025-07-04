import { ChangeDetectorRef, Component } from '@angular/core';
import { View } from '../utils/view.component';
import { TableColumn } from '../model/TableColumn';
import { ListAllMoviesService } from '../service/list-all-movies-service';
import { WidgetTable } from "../widget-table/widget-table";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { MatProgressBar } from '@angular/material/progress-bar';
import { WinnersByYearService } from '../service/winners-by-year-service';

@Component({
  selector: 'app-winners-by-year',
  imports: [MatIconModule, WidgetTable, MatProgressBar, CommonModule, WidgetTable, FormsModule, MatButtonModule, MatDividerModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule
  ],
  templateUrl: './winners-by-year.html',
  styleUrl: './winners-by-year.css'
})
export class WinnersByYear extends View<any> {
  title = "List movie winners by year"
  columns: TableColumn[] = [
    {
      label: "title",
      property: "title",
      type: "text",
      sortable: false,
    },
    {
      label: "producers",
      property: "producers",
      type: "text",
      sortable: false,
    },
    {
      label: "studios",
      property: "studios",
      type: "text",
      sortable: false,
    },
    {
      label: "winner",
      property: "winner",
      type: "text",
      sortable: false,
    }
    ,
    {
      label: "year",
      property: "year",
      type: "text",
      sortable: false,
    }


  ];

  private destroy$ = new Subject<void>();
  private yearSearchSubject = new Subject<string>();

  constructor(protected override service: WinnersByYearService, protected cdr: ChangeDetectorRef) {
    super(service);
    this.yearSearchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe((year: any) => {
      this.selectedYear = year;
      let params = ""
      if (year) {
        params = '?year=' + year
      }
      this.findAll(params)
    });
  }
  override ngOnInit(): void {

  }
  override ngAfterViewInit(): void {

    this.cdr.detectChanges()
  }
  onSearch($event: any){
    console.log('search', this.selectedYear )
      this.findAll('?year='+this.selectedYear)
  }
  onYearChange($event: any) {
    const year = $event.target.value;
    this.yearSearchSubject.next(year);

  }
}
