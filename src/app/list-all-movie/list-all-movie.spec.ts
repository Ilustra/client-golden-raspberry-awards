import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllMovie } from './list-all-movie';

describe('ListAllMovie', () => {
  let component: ListAllMovie;
  let fixture: ComponentFixture<ListAllMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllMovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
