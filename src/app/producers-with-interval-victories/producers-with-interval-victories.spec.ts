import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersWithIntervalVictories } from './producers-with-interval-victories';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ProducersWithIntervalVictories', () => {
  let component: ProducersWithIntervalVictories;
  let fixture: ComponentFixture<ProducersWithIntervalVictories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducersWithIntervalVictories],
        providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducersWithIntervalVictories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
