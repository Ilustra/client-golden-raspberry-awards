import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTable } from './widget-table';

describe('WidgetTable', () => {
  let component: WidgetTable<any>;
  let fixture: ComponentFixture<WidgetTable<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
