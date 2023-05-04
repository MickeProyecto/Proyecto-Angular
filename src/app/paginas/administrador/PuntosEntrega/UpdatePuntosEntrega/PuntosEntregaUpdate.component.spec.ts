import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosEntregaUpdateComponent } from './PuntosEntregaUpdate.component';

describe('PuntosEntregaUpdateComponent', () => {
  let component: PuntosEntregaUpdateComponent;
  let fixture: ComponentFixture<PuntosEntregaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosEntregaUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntosEntregaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
