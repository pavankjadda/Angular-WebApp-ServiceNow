import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailNewComponent} from './order-detail-new.component';

describe('OrderDetailNewComponent', () => {
  let component: OrderDetailNewComponent;
  let fixture: ComponentFixture<OrderDetailNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
