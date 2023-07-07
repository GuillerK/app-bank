import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-registro-cliente-nuevo',
  templateUrl: './registro-cliente-nuevo.component.html',
  styleUrls: ['./registro-cliente-nuevo.component.css']
})

export class RegistroClienteNuevoComponent {
  constructor(private http: HttpClient, private router: Router, private clienteService: ClienteService) {}

  registrarCliente(nombre: string, email: string, contraseña: string) {
    const nuevoCliente = { usuario: nombre, correo: email, password: contraseña };

    this.http.post('http://localhost:8080/cliente', nuevoCliente)
      .subscribe((nuevoCliente) => {
        console.log(nuevoCliente + 'Cliente registrado exitosamente');
        this.router.navigateByUrl("/auth/login");
       
      }, error => {
        console.error('Error al registrar cliente:', error);
       
      });
  }
}






