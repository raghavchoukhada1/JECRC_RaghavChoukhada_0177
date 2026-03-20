import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderparent } from './orderparent';

describe('Orderparent', () => {
  let component: Orderparent;
  let fixture: ComponentFixture<Orderparent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderparent],
    }).compileComponents();

    fixture = TestBed.createComponent(Orderparent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
