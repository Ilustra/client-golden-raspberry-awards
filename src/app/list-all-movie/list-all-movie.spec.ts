import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllMovie } from './list-all-movie';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ListAllMovie', () => {
  let component: ListAllMovie;
  let fixture: ComponentFixture<ListAllMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllMovie],
        providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllMovie);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('Create', () => {
    expect(component).toBeTruthy();
  });

  it('Limpar o  clearPaginated()', () => {
    component.pageable.pageNumber = 3;
    component.pageable.pageSize = 10;

    component.clearPaginated();

    expect(component.pageable.pageNumber).toBe(0);
    expect(component.pageable.pageSize).toBe(5);
  });

  it('should call clearPaginated and findAll on onYearChange', () => {
    spyOn(component, 'clearPaginated');
    spyOn(component, 'findAll');
    const event = { target: { value: '2023' } };

    component.onYearChange(event);

    expect(component.clearPaginated).toHaveBeenCalled();
    expect(component.selectedYear).toBe('2023');
    expect(component.findAll).toHaveBeenCalled();
  });

  it('should call clearPaginated and findAll on onWinnerChange', () => {
    spyOn(component, 'clearPaginated');
    spyOn(component, 'findAll');
    const event = { target: { value: 'true' } };

    component.onWinnerChange(event);

    expect(component.clearPaginated).toHaveBeenCalled();
    expect(component.selectedWinner).toBe('true');
    expect(component.findAll).toHaveBeenCalled();
  });

  it('Deve atualizar a  pageSize e onSizeChange', () => {
    spyOn(component, 'findAll');
    const event = { target: { value: 10 } };

    component.onSizeChange(event);

    expect(component.pageable.pageSize).toBe(10);
    expect(component.findAll).toHaveBeenCalled();
  });

  it('Deve decrementar o pageNumber', () => {
    component.pageable.pageNumber = 2;
    spyOn(component, 'findAll');

    component.onPreviousPage();

    expect(component.pageable.pageNumber).toBe(1);
    expect(component.findAll).toHaveBeenCalled();
  });

  it('Não deve decrement pageNumber  onPreviousPage', () => {
    component.pageable.pageNumber = 0;
    spyOn(component, 'findAll');

    component.onPreviousPage();

    expect(component.pageable.pageNumber).toBe(0);
    expect(component.findAll).toHaveBeenCalled();
  });

  it('Deve incrementar pageNumber ', () => {
    component.pageable.pageNumber = 1;
    component.pageData = { totalPages: 5 } as any;
    spyOn(component, 'findAll');

    component.onNextPage();

    expect(component.pageable.pageNumber).toBe(2);
    expect(component.findAll).toHaveBeenCalled();
  });

  it('Não deve incrementar pageNumber em onNextPage', () => {
    component.pageable.pageNumber = 4;
    component.pageData = { totalPages: 5 } as any;
    spyOn(component, 'findAll');

    component.onNextPage();

    expect(component.pageable.pageNumber).toBe(4);
    expect(component.findAll).toHaveBeenCalled();
  });

  it(' Deve retonar correamente o params string ', () => {
    component.pageable.pageNumber = 1;
    component.pageable.pageSize = 10;
    component.selectedWinner = null;
    component.selectedYear = null;

    const result = component.getParam();

    expect(result).toBe('?page=1&size=10');
  });

  it(' Deve retornar o param filter por winner ', () => {
    component.pageable.pageNumber = 0;
    component.pageable.pageSize = 5;
    component.selectedWinner = 'true';
    component.selectedYear = null;

    const result = component.getParam();

    expect(result).toBe('?page=0&size=5&winner=true');
  });

  it('Deve retornar o params filter por ano ', () => {
    component.pageable.pageNumber = 0;
    component.pageable.pageSize = 5;
    component.selectedWinner = null;
    component.selectedYear = '2023';

    const result = component.getParam();

    expect(result).toBe('?page=0&size=5&year=2023');
  });

    it('Deve retornar  params string com  filters', () => {
      component.pageable.pageNumber = 2;
      component.pageable.pageSize = 20;
      component.selectedWinner = 'false';
      component.selectedYear = '2022';
  
      const result = component.getParam();
  
      expect(result).toBe('?page=2&size=20&winner=false&year=2022');
    });
  });