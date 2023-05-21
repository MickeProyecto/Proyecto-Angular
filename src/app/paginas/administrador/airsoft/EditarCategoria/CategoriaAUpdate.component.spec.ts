import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaUpdateAirsoftComponent } from './CategoriaAUpdate.component';


describe('CategoriaUpdateAirsoftComponent', () => {
  let component: CategoriaUpdateAirsoftComponent;
  let fixture: ComponentFixture<CategoriaUpdateAirsoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaUpdateAirsoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaUpdateAirsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
