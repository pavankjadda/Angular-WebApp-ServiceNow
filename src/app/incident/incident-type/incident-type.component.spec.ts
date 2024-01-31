import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { IncidentTypeComponent } from "./incident-type.component";

describe("IncidentTypeComponent", () => {
  let component: IncidentTypeComponent;
  let fixture: ComponentFixture<IncidentTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IncidentTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
