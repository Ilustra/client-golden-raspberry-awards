import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOneWinner } from './more-one-winner';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('MoreOneWinner', () => {
  let component: MoreOneWinner;
  let fixture: ComponentFixture<MoreOneWinner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreOneWinner],
        providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreOneWinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
