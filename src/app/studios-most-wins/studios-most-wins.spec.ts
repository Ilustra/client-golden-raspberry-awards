import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosMostWins } from './studios-most-wins';

describe('StudiosMostWins', () => {
  let component: StudiosMostWins;
  let fixture: ComponentFixture<StudiosMostWins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiosMostWins]
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
