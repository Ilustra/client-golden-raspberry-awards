import { TestBed } from '@angular/core/testing';

import { ListAllMovies } from './list-all-movies-service';

describe('ListAllMovies', () => {
  let service: ListAllMovies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAllMovies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
