import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css']
})
export class TransferenciasRecibidasComponent {

  transferenciasRecibidas: any[] = [];
  transferencias: any[] = [];
  cliente: any = null;

  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = this.clienteService.leerSesion();
    this.cargarTransferencias();
    this.cargarTransferenciasRecibidas();
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

cargarTransferenciasRecibidas() {
  if (this.cliente && this.cliente.id) { 
    this.transferenciaService
      .obtenerTransferenciaPorBeneficiario(this.cliente.id) 
      .subscribe((transferenciasCargadasRecibidas: any) => {
        console.log(transferenciasCargadasRecibidas);
        this.transferenciasRecibidas = transferenciasCargadasRecibidas;
      });
  } else {
    console.log("no hay cliente");
  }
}
}
