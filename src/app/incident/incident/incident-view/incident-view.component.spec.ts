import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IncidentViewComponent} from './incident-view.component';

describe('IncidentViewComponent', () => {
  let component: IncidentViewComponent;
  let fixture: ComponentFixture<IncidentViewComponent>;

  beforeEach(async(() => {
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
