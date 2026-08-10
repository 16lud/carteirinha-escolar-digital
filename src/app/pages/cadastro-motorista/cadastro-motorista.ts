import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-motorista',
  imports: [],
  templateUrl: './cadastro-motorista.html',
  styleUrl: './cadastro-motorista.css',
})
export class CadastroMotorista {

  constructor(private router: Router) {}

  cadastrar() {
    alert('Cadastro realizado com sucesso!');

    this.router.navigate(['/dashboard-motorista']);
  }

  voltar() {
    this.router.navigate(['/escolha-perfil']);
  }
}