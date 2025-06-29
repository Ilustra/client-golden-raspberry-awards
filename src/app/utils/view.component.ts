import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { CrudService } from "./crud.service";
import { Base, Pageable, PageData } from "../model/PageData";
import { MatTableDataSource } from "@angular/material/table";
import { filter, Observable, ReplaySubject } from "rxjs";
import { MatSort } from "@angular/material/sort";


@Component({
  selector: 'app-view',
  template: '<div></div>'
})
export class View<T> implements OnInit, OnDestroy, AfterViewInit {
    selectedYear: any;
    selectedWinner: any;
    pageData!: PageData; 
    pageable: Pageable = {
        sort: {
            sorted: false,
	        unsorted: false
        },
        pageSize: 10,
        pageNumber: 0,
        offset: 0,
        paged: false,
        unpaged: false
    }
    list: any[] | null;
    dataSource: MatTableDataSource<any> ;
    subject$: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    data$: Observable<any[]> = this.subject$.asObservable();
    loading: boolean = false; 
    @ViewChild(MatSort) sort!: MatSort;
    pageSizeOptions: number[] = [5, 10, 20,40, 80]
    constructor(
    protected service: CrudService<Base, number>,
    ) {
    this.list = null;
    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(
      filter<any[]>(Boolean))
      .subscribe((itens: any) => {

        this.list = itens.content;
        this.dataSource.data = itens.content;
        this.pageable = itens.pageable;
        this.pageData = itens
    });
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.findAll();
    }
    ngOnDestroy(): void {
      
    }
    ngOnInit(): void {
       
    }
    findAll(){
        let page = '?page='+ this.pageable.pageNumber +'&size='+this.pageable.pageSize 
        if(this.selectedWinner){
            page+='&winner='+this.selectedWinner
        }
        if(this.selectedYear){
            page+= '&year='+ this.selectedYear
        }
        this.service.findAll(page).subscribe((data: any)=>{
            this.loading = false;
            this.subject$.next(data);
        })
    }
    onYearChange($event: any){
        this.clearPaginated();
        this.selectedYear = $event.target.value

        this.findAll()
    }
    onWinnerChange($event: any){
        this.clearPaginated();
        this.selectedWinner = $event.target.value
        this.findAll()
    }
    onPageSizeChange(){

    }
    onSizeChange ($event: any){
        this.pageable.pageSize = $event.target.value
        this.findAll();
    }
    onPreviousPage(){
        if (this.pageable.pageNumber > 0) {
            this.pageable.pageNumber--;
            this.findAll();
        }
    }
    onNextPage(){
        if (this.pageData && this.pageable.pageNumber < this.pageData.totalPages - 1) {
            this.pageable.pageNumber++;
            this.findAll();
        }
    }
    clearPaginated() {
        this.pageable.pageNumber = 0;
        this.pageable.pageSize = 10;
    }

}
    