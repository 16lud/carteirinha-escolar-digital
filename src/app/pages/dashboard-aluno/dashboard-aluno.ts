import { Component } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-aluno',
  imports: [QRCodeComponent],
  templateUrl: './dashboard-aluno.html',
  styleUrl: './dashboard-aluno.css'
})
export class DashboardAluno {

  nomeAluno = 'Ludmila Tawane';
  matricula = '2026001234';
  turma = '3º INFO';
  turno = 'Matutino';
  escola = 'IFRN';

  qrCodeData = 'TRANSPORTE-DIGITAL-ALUNO-2026001234';


  constructor(private router: Router) {}


  irParaInicio() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  minhaRota() {
    console.log('Minha rota');
  }


  localizacao() {
    console.log('Localização');
  }


  horarios() {
    console.log('Horários');
  }


  notificacoes() {
    console.log('Notificações');
  }


  meuPerfil() {
    console.log('Meu perfil');
  }


  sair() {
    this.router.navigate(['/']);
  }

}