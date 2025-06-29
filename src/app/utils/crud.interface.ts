import { Observable } from "rxjs";
import { PageData } from "../model/PageData";

export interface Crud<T, ID> {
 
  findAll(page?: string): Observable<PageData>;


}