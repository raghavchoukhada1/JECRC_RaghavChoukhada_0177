import { TestBed } from '@angular/core/testing';
import { ProductComponent } from './product';

describe('Product', () => {
  let service: ProductComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
