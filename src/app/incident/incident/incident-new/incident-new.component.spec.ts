import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IncidentNewComponent} from './incident-new.component';

describe('IncidentNewComponent', () => {
  let component: IncidentNewComponent;
  let fixture: ComponentFixture<IncidentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
