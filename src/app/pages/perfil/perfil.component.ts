import { Component, OnInit } from '@angular/core';
import { gastosIngresos } from 'src/app/auth/datos/gastos-ingresos';
import { ClienteService } from 'src/app/services/cliente/cliente.service'



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit{

  cliente: any = null;
  saldo: any = null;

  infoGastos: any[] = gastosIngresos

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cliente = this.clienteService.leerSesion();
    this.saldo = this.clienteService.leerSesion();
    console.log("loqueado: " + this.cliente);
  }





};

