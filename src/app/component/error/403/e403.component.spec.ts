import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E403Component } from './e403.component';

describe('Error404Component', () => {
  let component: E403Component;
  let fixture: ComponentFixture<E403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
