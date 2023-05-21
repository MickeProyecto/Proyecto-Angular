import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoUpdateAirsoftComponent } from './ProductoUpdate.component';


describe('ProductoUpdateAirsoftComponent', () => {
  let component: ProductoUpdateAirsoftComponent;
  let fixture: ComponentFixture<ProductoUpdateAirsoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoUpdateAirsoftComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductoUpdateAirsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
