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
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-all-movie',
  imports: [CommonModule, WidgetTable, FormsModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
    MatSelectModule, MatProgressBar
  ],
  templateUrl: './list-all-movie.html',
  styleUrl: './list-all-movie.css'
})
export class ListAllMovie extends View<Movie> {
  columns: TableColumn[] = [
    {
      label: "id",
      property: "id",
      type: "text",
      sortable: false,
      css: ['']
    },
    {
      label: "Year",
      property: "year",
      type: "text",
      sortable: false,
      css: ['text-center'],
      onChange: (event: any) => {
        this.onYearChange(event)
      }
    },
    {
      label: "Title",
      property: "title",
      type: "text",
      sortable: false,
      css: ['']
    },
    {
      label: "Winner",
      property: "winner",
      type: "text",
      onChange: (event: any) => {
        this.onWinnerChange(event)
      },
      sortable: false,
      css: ['text-center'],
    }
  ];

  private destroy$ = new Subject<void>();
  private yearSearchSubject = new Subject<string>();

  constructor(protected override service: ListAllMoviesService, protected cdr: ChangeDetectorRef) {
    super(service);
        this.yearSearchSubject.pipe(
      debounceTime(500), 
      distinctUntilChanged(), 
      takeUntil(this.destroy$) 
    ).subscribe((year: any) => {
      this.clearPaginated();
      this.selectedYear = year;
      this.findAll(this.getParam());
    });
  }

  onYearChange($event: any) {
    const year = $event.target.value;
    this.yearSearchSubject.next(year);
  }

  onWinnerChange($event: any) {
    this.clearPaginated();
    this.selectedWinner = $event.target.value
    this.findAll(this.getParam())
  }
  onPageSizeChange() {

  }
  onSizeChange($event: any) {
    this.pageable.pageSize = $event.target.value
    this.findAll(this.getParam())
  }
  onPreviousPage() {
    if (this.pageable.pageNumber > 0) {
      this.pageable.pageNumber--;
    }
    this.findAll(this.getParam())
  }
  onNextPage() {
    if (this.pageData && this.pageable.pageNumber < this.pageData.totalPages - 1) {
      this.pageable.pageNumber++;

    }
    this.findAll(this.getParam())
  }
  clearPaginated() {
    this.pageable.pageNumber = 0;
    this.pageable.pageSize = 15;
  }
  override ngAfterViewInit(): void {
      this.findAll(this.getParam())
      this.cdr.detectChanges()
  }
  getParam() {
    let page = '?page=' + this.pageable.pageNumber + '&size=' + this.pageable.pageSize
    if (this.selectedWinner) {
      page += '&winner=' + this.selectedWinner
    }
    if (this.selectedYear) {
      page += '&year=' + this.selectedYear
    }
    return page;
  }
  getVisiblePages(): number[] {
    if (!this.pageData) return [];

    const totalPages = this.pageData.totalPages;
    const currentPage = this.pageable.pageNumber + 1;
    const maxVisible = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    const pages: number[] = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  goToPage(pageNumber: number) {
    this.pageable.pageNumber = pageNumber;
    this.findAll(this.getParam());
  }
  goToFirstPage() {
    this.pageable.pageNumber = 0;
    this.findAll(this.getParam());
  }
  goToLastPage() {
    if (this.pageData) {
      this.pageable.pageNumber = this.pageData.totalPages - 1;
      this.findAll(this.getParam());
    }
  }
}
