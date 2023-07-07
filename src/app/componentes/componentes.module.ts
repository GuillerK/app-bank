import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaTransferenciasComponent } from './tabla-transferencias/tabla-transferencias.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TablaTransferenciasComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablaTransferenciasComponent,
    RouterModule
  ]
})
export class ComponentesModule { }
