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


  findAll(page?: string): Observable<PageData> {
    if(!page){
      page=""
    }
    return this._http.get<PageData>(this._baseUrl   + this._api + page)
  }
 
}