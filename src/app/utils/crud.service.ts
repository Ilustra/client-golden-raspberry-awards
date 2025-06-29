import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { PageData } from "../model/PageData";
import { Crud } from "./crud.interface";
import { environment } from "../environment";



export abstract class CrudService<T, ID> implements Crud<T, ID> {

  protected _baseUrl: string = environment.apiUrl;

  constructor(
    protected _http: HttpClient,
    protected _api: string
  ) { }


  findAll(page: string): Observable<PageData> {
    return this._http.get<PageData>(this._baseUrl + '/'  + this._api+page)
  }

  findAllPaginated(searchText: string, pageSize: number, pageIndex: number): Observable<PageData> {
    let params = new HttpParams();
    params = params.set('searchText', searchText);
    params = params.set('pageSize', (pageSize ? pageSize : "") + "");
    params = params.set('pageIndex', (pageIndex ? pageIndex : "") + "");

    return this._http.get<PageData>(this._baseUrl + "/" + this._api, { params: params });

  }
 
}