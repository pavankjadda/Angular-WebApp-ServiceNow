import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IncidentHomeComponent} from './incident-home.component';

describe('IncidentHomeComponent', () => {
  let component: IncidentHomeComponent;
  let fixture: ComponentFixture<IncidentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
