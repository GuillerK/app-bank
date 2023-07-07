import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
