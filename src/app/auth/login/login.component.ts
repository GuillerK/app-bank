import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";


  

  constructor(private clienteService: ClienteService, private router: Router) {

  }

  validarLogin() {
    console.log("Validando...", this.email, this.password);

    const usuario = this.clienteService.toLogin(this.email, this.password);
    if (usuario) {
      console.log(usuario);
      this.router.navigateByUrl("/pages/perfil");
    } else {
      console.error("Credenciales incorrectas");
    }
  }

  enviarLogin() {
    this.clienteService
      .login(this.email, this.password)
      .subscribe(
        (cliente) => {
          if (cliente) {
            this.clienteService.crearSesion(cliente);
            this.router.navigateByUrl("/pages/perfil");
          } else {
            console.error("Login incorrecto");
          }

        },
        (error) => {
          console.log({ error });
        }
      );
  }


}
