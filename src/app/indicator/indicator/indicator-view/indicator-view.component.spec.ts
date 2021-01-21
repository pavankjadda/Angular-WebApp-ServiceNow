import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {IndicatorViewComponent} from './indicator-view.component';

describe('IndicatorViewComponent', () => {
  let component: IndicatorViewComponent;
  let fixture: ComponentFixture<IndicatorViewComponent>;

  beforeEach(waitForAsync(() => {
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
