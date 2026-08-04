import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { EscolhaPerfil } from './pages/escolha-perfil/escolha-perfil';

import { CadastroAluno } from './pages/cadastro-aluno/cadastro-aluno';
import { CadastroMotorista } from './pages/cadastro-motorista/cadastro-motorista';
import { CadastroEscola } from './pages/cadastro-escola/cadastro-escola';

import { DashboardAluno } from './pages/dashboard-aluno/dashboard-aluno';
import { DashboardMotorista } from './pages/dashboard-motorista/dashboard-motorista';
import { DashboardEscola } from './pages/dashboard-escola/dashboard-escola';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'escolha-perfil',
    component: EscolhaPerfil
  },

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
