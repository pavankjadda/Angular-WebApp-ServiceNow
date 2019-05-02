import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailUpdateComponent} from './order-detail-update.component';

describe('OrderDetailUpdateComponent', () => {
  let component: OrderDetailUpdateComponent;
  let fixture: ComponentFixture<OrderDetailUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
