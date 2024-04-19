import { Routes } from '@angular/router';
import { TiposComponent } from './tipos/tipos.component';
import { PokeLayoutComponent } from '../layouts/poke-layout/poke-layout.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';

export const routes: Routes = [
  {
    path: '',
    component: PokeLayoutComponent,
    children:
      [
        { path: 'habilidades', component: HabilidadesComponent },
        { path: 'tipos', component: TiposComponent },
        { path: '**', redirectTo: 'habilidades' }
      ]
  },
];
