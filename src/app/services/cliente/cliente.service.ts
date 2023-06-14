import { Injectable } from '@angular/core';
import { clients } from 'src/app/auth/datos/usuarios-ejemplo';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  toLogin(email: string, password: string) {
    for (let i = 0; i < clients.length; i++) {
      const client = clients[i];
      if (email === client.correo && password === client.password) {
        return client;
      }
    }
    return null;
  }
}
