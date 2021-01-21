import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {IncidentEditComponent} from './incident-edit.component';

describe('IncidentEditComponent', () => {
  let component: IncidentEditComponent;
  let fixture: ComponentFixture<IncidentEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
