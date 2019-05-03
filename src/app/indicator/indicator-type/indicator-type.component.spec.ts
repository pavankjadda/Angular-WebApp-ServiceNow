import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IndicatorTypeComponent} from './indicator-type.component';

describe('IndicatorTypeComponent', () => {
  let component: IndicatorTypeComponent;
  let fixture: ComponentFixture<IndicatorTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
