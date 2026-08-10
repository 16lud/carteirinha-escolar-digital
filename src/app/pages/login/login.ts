import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private router: Router) {}

  entrarComoAluno() {
    this.router.navigate(['/login-aluno']);
  }

  entrarComoMotorista() {
    this.router.navigate(['/login-motorista']);
  }

  entrarComoEscola() {
    this.router.navigate(['/login-escola']);
  }

  criarConta() {
    this.router.navigate(['/escolha-perfil']);
  }

  voltarHome() {
    this.router.navigate(['/']);
  }
}