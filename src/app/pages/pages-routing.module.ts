import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetallesTransferenciasComponent } from './detalles-transferencias/detalles-transferencias.component';
import { RegistroClienteNuevoComponent } from './registro-cliente-nuevo/registro-cliente-nuevo.component';
import { loginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [loginGuard]
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "transferencias-recibidas",
    component: TransferenciasRecibidasComponent,
  },
  {
    path: "transferencias-enviadas",
    component: TransferenciasEnviadasComponent,
  },
  {
    path: "nueva-transferencia",
    component: NuevaTransferenciaComponent,
  },
  {
    path: "perfil",
    component: PerfilComponent,
  },
  {
    path: "transferencias/:id",
    component: DetallesTransferenciasComponent,
  },
  {
    path: "registro-cliente-nuevo",
    component: RegistroClienteNuevoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
