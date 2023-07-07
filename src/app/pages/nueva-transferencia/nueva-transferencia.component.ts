import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { clients } from 'src/app/auth/datos/usuarios-ejemplo';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent {

  id: number | null = null;
  importe: number | null = null;
  concepto: string = "";
  mensaje: string = "";


  constructor(private clienteService: ClienteService, private router: Router) {

  }

  enviarTransferencia() {
    const usuario = clients.find(cliente => cliente.id === this.id);
    if (usuario) {
      console.log("Transferencia enviada");
      this.mostrarMensaje("¡Transferencia enviada!");
      return this.borrarFormulario();
    } else {
      console.log("Datos incorrectos");
      this.mostrarMensaje("Datos incorrectos, intentalo de nuevo");
    }
  }
}