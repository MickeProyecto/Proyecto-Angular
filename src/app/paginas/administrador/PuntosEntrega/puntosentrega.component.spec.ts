import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosEntregaComponent } from './puntosentrega.component';

describe('PuntosEntregaComponent', () => {
  let component: PuntosEntregaComponent;
  let fixture: ComponentFixture<PuntosEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosEntregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntosEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
