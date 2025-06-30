import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersWithIntervalVictories } from './producers-with-interval-victories';

describe('ProducersWithIntervalVictories', () => {
  let component: ProducersWithIntervalVictories;
  let fixture: ComponentFixture<ProducersWithIntervalVictories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducersWithIntervalVictories]
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
