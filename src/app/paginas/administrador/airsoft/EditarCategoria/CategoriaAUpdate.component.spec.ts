import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaAUpdateComponent } from './CategoriaAUpdate.component';


describe('CategoriaAUpdateComponent', () => {
  let component: CategoriaAUpdateComponent;
  let fixture: ComponentFixture<CategoriaAUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaAUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaAUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
