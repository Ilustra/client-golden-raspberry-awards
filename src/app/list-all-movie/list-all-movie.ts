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
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-list-all-movie',
  imports: [CommonModule, WidgetTable, FormsModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
    MatSelectModule, MatProgressBarModule
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
  constructor(protected override service: ListAllMoviesService, protected cdr: ChangeDetectorRef) {
    super(service);
  }

  onYearChange($event: any) {
    this.clearPaginated();
    this.selectedYear = $event.target.value

    this.findAll(this.getParam())
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
