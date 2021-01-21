import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {IncidentViewComponent} from './incident-view.component';

describe('IncidentViewComponent', () => {
  let component: IncidentViewComponent;
  let fixture: ComponentFixture<IncidentViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
