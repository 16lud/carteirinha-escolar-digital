import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno',
  imports: [],
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.css',
})
export class CadastroAluno {

  cadastroConcluido = false;

  constructor(private router: Router) {}

  criarConta() {
    this.cadastroConcluido = true;

    setTimeout(() => {
      this.router.navigate(['/dashboard-aluno']);
    }, 1500);
  }

  voltar() {
    this.router.navigate(['/escolha-perfil']);
  }
}