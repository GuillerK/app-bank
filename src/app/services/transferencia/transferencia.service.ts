import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  urlApi: string = "http://localhost:8080/transferencia";
  constructor(private http: HttpClient) { }

obtenerTransferencias() {
  return this.http.get(this.urlApi)
}

obtenerTransferenciaPorOrdenante(idOrdenante: number) {
  return this.http.get(this.urlApi + "/ordenante/" + idOrdenante)
}

obtenerTransferenciaPorBeneficiario(idBeneficiario: number) {
  return this.http.get(this.urlApi + "/beneficiario/" + idBeneficiario)
}

}
