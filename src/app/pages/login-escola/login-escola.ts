import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-escola',
  imports: [],
  templateUrl: './login-escola.html',
  styleUrl: './login-escola.css'
})
export class LoginEscola {

  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['/dashboard-escola']);
  }

  voltar() {
    this.router.navigate(['/login']);
  }

  criarConta() {
    this.router.navigate(['/cadastro-escola']);
  }
}