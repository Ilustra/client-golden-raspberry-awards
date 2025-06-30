import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosMostWins } from './studios-most-wins';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('StudiosMostWins', () => {
  let component: StudiosMostWins;
  let fixture: ComponentFixture<StudiosMostWins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiosMostWins],
        providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiosMostWins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
