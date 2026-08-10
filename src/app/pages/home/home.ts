import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  selectedProfile = 'aluno';

  constructor(private router: Router) {}

  selectProfile(profile: string) {
    this.selectedProfile = profile;

    if (profile === 'aluno') {
      this.router.navigate(['/cadastro-aluno']);
    }

    if (profile === 'motorista') {
      this.router.navigate(['/cadastro-motorista']);
    }

    if (profile === 'escola') {
      this.router.navigate(['/cadastro-escola']);
    }
  }

  abrirLogin() {
    this.router.navigate(['/login']);
  }

  abrirCadastro() {
    this.router.navigate(['/escolha-perfil']);
  }

}