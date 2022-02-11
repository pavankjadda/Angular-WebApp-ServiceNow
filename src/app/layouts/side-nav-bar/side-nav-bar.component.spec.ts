import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBarComponent } from './side-nav-bar.component';

describe('SideNavBarComponent', () => {
  let component: SideNavBarComponent;
  let fixture: ComponentFixture<SideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
