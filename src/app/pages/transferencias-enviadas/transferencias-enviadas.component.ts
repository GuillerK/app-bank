import { Component } from '@angular/core';
import { transferenciasEnviadas } from 'src/app/auth/datos/transferenciasEnviadas-ejemplo';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent {

  transferenciasEnviadas: any[] = [];
  transferencias: any[] = [];
  cliente: any = null;

  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = this.clienteService.leerSesion();
    this.cargarTransferencias();
    this.cargarTransferenciasEnviadas();

  }

  cargarTransferencias() {
    this.transferenciaService
      .obtenerTransferencias()
      .subscribe((transferenciasCargadas: any) => {
        console.log(transferenciasCargadas);
        this.transferencias = transferenciasCargadas;
      }
      );
  }

  cargarTransferenciasEnviadas() {
    if (this.cliente && this.cliente.id) { 
      this.transferenciaService
        .obtenerTransferenciaPorOrdenante(this.cliente.id) 
        .subscribe((transferenciasCargadasEnviadas: any) => {
          console.log(transferenciasCargadasEnviadas);
          this.transferenciasEnviadas = transferenciasCargadasEnviadas;
        });
    }
  
  }
  }
