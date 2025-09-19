import { Route } from '@angular/router';

import { Register } from './register/register';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: Register,
  },
  {
    path: 'summary',
    loadComponent: () => import('./summary/summary'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
