import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeforms } from './employeeforms';

describe('Employeeforms', () => {
  let component: Employeeforms;
  let fixture: ComponentFixture<Employeeforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeeforms],
    }).compileComponents();

    fixture = TestBed.createComponent(Employeeforms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
