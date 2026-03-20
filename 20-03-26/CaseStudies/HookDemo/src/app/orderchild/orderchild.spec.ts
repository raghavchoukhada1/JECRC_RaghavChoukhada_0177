import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderchild } from './orderchild';

describe('Orderchild', () => {
  let component: Orderchild;
  let fixture: ComponentFixture<Orderchild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderchild],
    }).compileComponents();

    fixture = TestBed.createComponent(Orderchild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
