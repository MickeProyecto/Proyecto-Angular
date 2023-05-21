import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaUpdatePolicialComponent } from './CategoriaUpdate.component';


describe('CategoriaUpdatePolicialComponent', () => {
  let component: CategoriaUpdatePolicialComponent;
  let fixture: ComponentFixture<CategoriaUpdatePolicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaUpdatePolicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaUpdatePolicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
