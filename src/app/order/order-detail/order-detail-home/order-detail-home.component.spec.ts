import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailHomeComponent} from './order-detail-home.component';

describe('OrderDetailHomeComponent', () => {
  let component: OrderDetailHomeComponent;
  let fixture: ComponentFixture<OrderDetailHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
