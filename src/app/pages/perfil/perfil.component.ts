import { Component, OnInit } from '@angular/core';
import { gastosIngresos } from 'src/app/auth/datos/gastos-ingresos';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit{

  cliente: any = null;
  saldo: any = null;

  password: string = "";
  password2: string = "";
  mensajePass: string = "";

  infoGastos: any[] = gastosIngresos

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.cliente = this.clienteService.leerSesion();
    this.saldo = this.clienteService.leerSesion();
    console.log("loqueado: " + this.cliente);
  }

  cerrarSesion(){
    sessionStorage.removeItem("sesion");
    this.router.navigateByUrl("/auth/login")
    
  }


modificarLogin() {
  console.log("validando", this.password)
  if (!this.password || !this.password2) {
    this.mensajePass = "No has introducido contraseña"
    return;
  }

  if (this.password === this.password2) {
    
    let cliente = this.clienteService.leerSesion();
    cliente.password = this.password;
    this.clienteService.guardar(cliente).subscribe(clienteActualizado =>{
      this.mensajePass = "Contraseña actualizada"
    });
    
  } else {
    this.mensajePass = "Las contraseñas no son iguales"
  }
}

};

