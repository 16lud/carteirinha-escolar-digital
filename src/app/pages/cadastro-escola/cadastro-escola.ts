import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-escola',
  imports: [],
  templateUrl: './cadastro-escola.html',
  styleUrl: './cadastro-escola.css',
})
export class CadastroEscola {

  constructor(private router: Router) {}

  cadastrar() {
    alert('Cadastro da escola realizado com sucesso!');

    this.router.navigate(['/dashboard-escola']);
  }

  voltar() {
    this.router.navigate(['/escolha-perfil']);
  }
}