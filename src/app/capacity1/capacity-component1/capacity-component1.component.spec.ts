import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityComponent1Component } from './capacity-component1.component';

describe('CapacityComponent1Component', () => {
  let component: CapacityComponent1Component;
  let fixture: ComponentFixture<CapacityComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
