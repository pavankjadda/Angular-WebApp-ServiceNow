import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailEditComponent} from './order-detail-edit.component';

describe('OrderDetailEditComponent', () => {
  let component: OrderDetailEditComponent;
  let fixture: ComponentFixture<OrderDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
