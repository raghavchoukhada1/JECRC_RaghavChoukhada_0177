import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedbackform } from './feedbackform';

describe('Feedbackform', () => {
  let component: Feedbackform;
  let fixture: ComponentFixture<Feedbackform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feedbackform],
    }).compileComponents();

    fixture = TestBed.createComponent(Feedbackform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
