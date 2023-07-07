import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-detalles-transferencias',
  templateUrl: './detalles-transferencias.component.html',
  styleUrls: ['./detalles-transferencias.component.css']
})
export class DetallesTransferenciasComponent implements OnInit{

transferenciaDetalle: any = null;

  constructor (private route: ActivatedRoute,
    private transferenciaService: TransferenciaService) {
  }

  ngOnInit(): void {
    let transferenciaIdString = this.route.snapshot.paramMap.get('id');
    let transferenciaId;
    if(transferenciaIdString) {
      transferenciaId = parseInt(transferenciaIdString);
      console.log({transferenciaId})
      this.transferenciaService
      .obtenerTransferenciasPorId(transferenciaId)
      .subscribe((transferenciaHTML) => {
        console.log({transferenciaHTML});
        this.transferenciaDetalle = transferenciaHTML;
      });

  }

  }

}
