import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E404Component } from './e404.component';

describe('Error404Component', () => {
  let component: E404Component;
  let fixture: ComponentFixture<E404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
