import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IndicatorListComponent} from './indicator-list.component';

describe('IndicatorListComponent', () => {
  let component: IndicatorListComponent;
  let fixture: ComponentFixture<IndicatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
