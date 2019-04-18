import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityComponentComponent } from './capacity-component.component';

describe('CapacityComponentComponent', () => {
  let component: CapacityComponentComponent;
  let fixture: ComponentFixture<CapacityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
