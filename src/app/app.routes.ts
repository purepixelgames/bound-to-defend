import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'devlogs',
    loadComponent: () =>
      import('./pages/devlogs/devlogs').then((m) => m.Devlogs),
  },
  {
    path: 'leaderboards',
    loadComponent: () =>
      import('./pages/leaderboards/leaderboards').then((m) => m.Leaderboards),
  },
  {
    path: 'wiki',
    loadComponent: () =>
      import('./pages/wiki/wiki').then((m) => m.Wiki),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
