import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {IncidentComponent} from './incident.component';

describe('IncidentComponent', () => {
  let component: IncidentComponent;
  let fixture: ComponentFixture<IncidentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IncidentComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
