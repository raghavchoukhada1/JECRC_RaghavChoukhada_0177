import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsDemo } from './rx-js-demo';

describe('RxJsDemo', () => {
  let component: RxJsDemo;
  let fixture: ComponentFixture<RxJsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(RxJsDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
