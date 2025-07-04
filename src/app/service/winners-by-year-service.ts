import { Injectable } from '@angular/core';
import { CrudService } from '../utils/crud.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class WinnersByYearService extends CrudService<Movie, number> {

  constructor(protected override _http: HttpClient) {
  super(_http, 'movies/winnersByYear');
  }
}