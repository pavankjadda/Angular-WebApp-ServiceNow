import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {IncidentHomeComponent} from './incident-home.component';

describe('IncidentHomeComponent', () => {
  let component: IncidentHomeComponent;
  let fixture: ComponentFixture<IncidentHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IncidentHomeComponent]
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
