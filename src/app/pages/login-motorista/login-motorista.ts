import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-motorista',
  imports: [],
  templateUrl: './login-motorista.html',
  styleUrl: './login-motorista.css'
})
export class LoginMotorista {

  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['/dashboard-motorista']);
  }

  criarConta() {
    this.router.navigate(['/cadastro-motorista']);
  }

  voltar() {
    this.router.navigate(['/login']);
  }

  voltarHome() {
    this.router.navigate(['/']);
  }
}