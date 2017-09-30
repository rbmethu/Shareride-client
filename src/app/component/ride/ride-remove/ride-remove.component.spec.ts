import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideRemoveComponent } from './ride-remove.component';

describe('RideRemoveComponent', () => {
  let component: RideRemoveComponent;
  let fixture: ComponentFixture<RideRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
