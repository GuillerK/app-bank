import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clients } from 'src/app/auth/datos/usuarios-ejemplo';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlApi: string = "http://localhost:8080/cliente";

  constructor(private http: HttpClient) { }

  toLogin(email: string, password: string) {
    for (let i = 0; i < clients.length; i++) {
      const client = clients[i];
      if (email === client.correo && password === client.password) {
        return client;
      }
    }
    return null;
  }

  toTransferencia(id: number) {
    for (let i = 0; i < clients.length; i++) {
      const client = clients[i];
      if (id === client.id) {
        return client;
      }
    }
    return null;
  }

  obtenerClientes() {
    return this.http.get(this.urlApi);
  }

  login(correo: string, password: string) {
    const url = `${this.urlApi}/login?correo=${correo}&password=${password}`;
    return this.http.get(url);
  }

  crearSesion(clienteLogueado: any) {
    const clienteJSON = JSON.stringify(clienteLogueado);
    sessionStorage.setItem("sesion", clienteJSON);
  }

  leerSesion() {
    const clienteJSON = sessionStorage.getItem("sesion");
    if(clienteJSON){
      const clienteLogueado = JSON.parse(clienteJSON);
      return clienteLogueado;
    }
    return null;
  }

  cerrarSesion(){
    sessionStorage.removeItem("sesion");
  }

}
