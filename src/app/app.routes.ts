import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokeweb',
    loadChildren: () => import('./pokemon/pokemon.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'pokeweb'
  },
];
