import { Routes } from '@angular/router';

import { Usuarios } from './usuarios/usuarios';

import { ListaUsuarios } from './lista-usuarios/lista-usuarios';

export const routes: Routes = [

  {
    path:'usuarios',
    component:ListaUsuarios
  },

  {
    path:'usuario/:id/:nombre',
    component:Usuarios
  },

  {
    path:'',
    redirectTo:'usuarios',
    pathMatch:'full'
  }

];
