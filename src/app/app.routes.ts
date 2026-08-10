import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { EscolhaPerfil } from './pages/escolha-perfil/escolha-perfil';

import { CadastroAluno } from './pages/cadastro-aluno/cadastro-aluno';
import { CadastroMotorista } from './pages/cadastro-motorista/cadastro-motorista';
import { CadastroEscola } from './pages/cadastro-escola/cadastro-escola';

import { LoginAluno } from './pages/login-aluno/login-aluno';
import { LoginMotorista } from './pages/login-motorista/login-motorista';
import { LoginEscola } from './pages/login-escola/login-escola';

import { DashboardAluno } from './pages/dashboard-aluno/dashboard-aluno';
import { DashboardMotorista } from './pages/dashboard-motorista/dashboard-motorista';
import { DashboardEscola } from './pages/dashboard-escola/dashboard-escola';

export const routes: Routes = [

  // HOME
  {
    path: '',
    component: Home
  },

  // LOGIN PRINCIPAL
  {
    path: 'login',
    component: Login
  },

  // ESCOLHA DO PERFIL PARA CADASTRO
  {
    path: 'escolha-perfil',
    component: EscolhaPerfil
  },

  // CADASTROS
  {
    path: 'cadastro-aluno',
    component: CadastroAluno
  },

  {
    path: 'cadastro-motorista',
    component: CadastroMotorista
  },

  {
    path: 'cadastro-escola',
    component: CadastroEscola
  },

  // LOGINS ESPECÍFICOS
  {
    path: 'login-aluno',
    component: LoginAluno
  },

  {
    path: 'login-motorista',
    component: LoginMotorista
  },

  {
    path: 'login-escola',
    component: LoginEscola
  },

  // DASHBOARDS
  {
    path: 'dashboard-aluno',
    component: DashboardAluno
  },

  {
    path: 'dashboard-motorista',
    component: DashboardMotorista
  },

  {
    path: 'dashboard-escola',
    component: DashboardEscola
  }

];