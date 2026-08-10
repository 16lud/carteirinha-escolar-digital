import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-dashboard-aluno',
  standalone: true,
  imports: [QRCodeComponent],
  templateUrl: './dashboard-aluno.html',
  styleUrl: './dashboard-aluno.css'
})
export class DashboardAluno {

  // Dados fictícios para testar a interface
  nomeAluno = 'Ludmila Tawane';
  matricula = '2026001234';
  turma = '3º Informática';
  turno = 'Matutino';
  escola = 'IFRN';

  // Dados que serão transformados em QR Code
  // Futuramente isso poderá vir do cadastro/login.
  qrCodeData = 'TRANSPORTE-DIGITAL-ALUNO-2026001234';

  constructor(private router: Router) {}

  irParaInicio() {
    // Mantém o aluno na página inicial do dashboard
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
    this.router.navigate(['/login']);
  }
}