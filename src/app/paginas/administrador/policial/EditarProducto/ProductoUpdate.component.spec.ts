import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoUpdatePolicialComponent } from './ProductoUpdate.component';


describe('ProductoUpdatePolicialComponent', () => {
  let component: ProductoUpdatePolicialComponent;
  let fixture: ComponentFixture<ProductoUpdatePolicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoUpdatePolicialComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductoUpdatePolicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
