import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';


@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent implements OnInit{

  // id: number | null = null;
  // importe: number | null = null;
  // concepto: string = "";
  // mensaje: string = "";

  nuevaTransferencia: any = {
    ordenante: {
        "id": null,
    },
    beneficiario: {
        "id": null,
    },
    importe: 0,
    concepto: "",
  };

  ordenante: any = null;
  feedback: String = "";
  feedback_error: String = "";


  constructor(private clienteService: ClienteService, 
    private transferenciaService: TransferenciaService, 
   ) {}

   ngOnInit(): void {
     this.ordenante = this.clienteService.leerSesion();
   }

  enviarTransferencia() {
    if(this.ordenante) {
    this.nuevaTransferencia.ordenante.id = this.ordenante.id;
    this.transferenciaService
    .guardar(this.nuevaTransferencia)
    .subscribe((transferenciaGuardada) => {
      console.log({transferenciaGuardada})
      this.feedback = "¡Transferencia Enviada!";
    },
    (error)=> {
    console.log({error});
    this.feedback_error = "¡Ups! Error al enviar la transferencia"
  }
    );
  }

  }
}