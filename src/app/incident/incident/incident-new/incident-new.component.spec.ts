import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {IncidentNewComponent} from './incident-new.component';

describe('IncidentNewComponent', () => {
  let component: IncidentNewComponent;
  let fixture: ComponentFixture<IncidentNewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IncidentNewComponent]
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
