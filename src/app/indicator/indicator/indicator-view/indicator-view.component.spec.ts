import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IndicatorViewComponent} from './indicator-view.component';

describe('IndicatorViewComponent', () => {
  let component: IndicatorViewComponent;
  let fixture: ComponentFixture<IndicatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
