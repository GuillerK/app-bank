import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroClienteNuevoComponent } from './registro-cliente-nuevo.component';

describe('RegistroClienteNuevoComponent', () => {
  let component: RegistroClienteNuevoComponent;
  let fixture: ComponentFixture<RegistroClienteNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroClienteNuevoComponent]
    });
    fixture = TestBed.createComponent(RegistroClienteNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
