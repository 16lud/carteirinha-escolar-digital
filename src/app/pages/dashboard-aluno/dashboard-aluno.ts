import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-dashboard-aluno',
  imports: [QRCodeComponent],
  templateUrl: './dashboard-aluno.html',
  styleUrl: './dashboard-aluno.css',
})
export class DashboardAluno {

  // Dados de demonstração do aluno
  nomeAluno = 'Ludmila Tawane';
  matricula = '20260001';
  turma = '3º Ano';
  turno = 'Matutino';
  escola = 'IFRN';

  // Token fictício para demonstração do QR Code.
  // Não contém dados pessoais do aluno.
  qrToken = 'TD-ALUNO-8F4A92C7-2026';

  constructor(private router: Router) {}

  irParaInicio() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  minhaRota() {
    alert('Área "Minha rota" em desenvolvimento.');
  }

  localizacao() {
    alert('Área de localização em desenvolvimento.');
  }

  horarios() {
    alert('Área de horários em desenvolvimento.');
  }

  notificacoes() {
    alert('Você não possui novas notificações.');
  }

  meuPerfil() {
    alert('Área "Meu perfil" em desenvolvimento.');
  }

  sair() {
    this.router.navigate(['/']);
  }
}