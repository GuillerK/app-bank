import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTransferenciasComponent } from './detalles-transferencias.component';

describe('DetallesTransferenciasComponent', () => {
  let component: DetallesTransferenciasComponent;
  let fixture: ComponentFixture<DetallesTransferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesTransferenciasComponent]
    });
    fixture = TestBed.createComponent(DetallesTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
