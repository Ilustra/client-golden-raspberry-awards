import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
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
        pageSize: 15,
        pageNumber: 0,
        offset: 0,
        paged: false,
        unpaged: false
    }
    list: any[] | null;
    dataSource: MatTableDataSource<any>;
    subject$: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    data$: Observable<any[]> = this.subject$.asObservable();
    loading: boolean = false;
    @ViewChild(MatSort) sort!: MatSort;

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
                this.dataSource.data = itens.content || itens.years || itens.studios || itens;
                this.pageable = itens.pageable;
                this.pageData = itens
            });
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.findAll("?page=0&size="+this.pageable.pageSize);
    }
    ngOnDestroy(): void {

    }
    ngOnInit(): void {

    }
    findAll(param?: string) {
        this.loading = true;

        this.service.findAll(param).subscribe({
            next: (res: any) => {

                if (res?.min) {
                    this.subject$.next([...res.min, ...res.max])
                } else {
                    this.subject$.next(res);
                }

                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            },
            error: (err) => {
                this.subject$.next([]);
                this.loading = false;
            }
        })
    }


}
