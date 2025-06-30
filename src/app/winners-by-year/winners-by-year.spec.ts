import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersByYear } from './winners-by-year';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('WinnersByYear', () => {
  let component: WinnersByYear;
  let fixture: ComponentFixture<WinnersByYear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersByYear],
        providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnersByYear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
