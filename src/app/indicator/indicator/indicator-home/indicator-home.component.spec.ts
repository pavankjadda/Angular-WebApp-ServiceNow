import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {IndicatorHomeComponent} from './indicator-home.component';

describe('IndicatorHomeComponent', () => {
  let component: IndicatorHomeComponent;
  let fixture: ComponentFixture<IndicatorHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
