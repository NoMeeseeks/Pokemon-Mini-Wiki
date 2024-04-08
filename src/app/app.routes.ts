import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'pokemon'
  },
];
