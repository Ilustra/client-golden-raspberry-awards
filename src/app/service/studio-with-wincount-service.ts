import { Injectable } from '@angular/core';
import { CrudService } from '../utils/crud.service';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudioWithWincountService extends CrudService<Movie, number> {

  constructor(protected override _http: HttpClient) {
  super(_http, 'movies/studiosWithWinCount');
  }
}