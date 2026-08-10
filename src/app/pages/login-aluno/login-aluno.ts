import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-aluno',
  imports: [],
  templateUrl: './login-aluno.html',
  styleUrl: './login-aluno.css'
})
export class LoginAluno {

  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['/dashboard-aluno']);
  }

  criarConta() {
    this.router.navigate(['/cadastro-aluno']);
  }

  voltar() {
    this.router.navigate(['/login']);
  }

}