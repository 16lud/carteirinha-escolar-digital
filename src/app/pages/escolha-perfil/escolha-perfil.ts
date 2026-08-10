import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolha-perfil',
  imports: [],
  templateUrl: './escolha-perfil.html',
  styleUrl: './escolha-perfil.css',
})
export class EscolhaPerfil {

  constructor(private router: Router) {}

  cadastrarAluno() {
    this.router.navigate(['/cadastro-aluno']);
  }

  cadastrarMotorista() {
    this.router.navigate(['/cadastro-motorista']);
  }

  cadastrarEscola() {
    this.router.navigate(['/cadastro-escola']);
  }

  voltar() {
    this.router.navigate(['/']);
  }
}