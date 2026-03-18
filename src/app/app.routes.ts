import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },

  {
    path: 'contato',
    title:'Fale comigo | Cristian Etchebest',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
    {
    path: 'trajetoria',
    title:'Trajetória | Cristian Etchebest',
    loadComponent: () => import('./pages/trajetoria/trajetoria').then((m) => m.Trajetoria),
  },
  {
    path: 'projetos-compartilhados',
    title:'Projetos do Github | Cristian Etchebest',
    loadComponent: () => import('./pages/shared-jobs/shared-jobs').then((m) => m.SharedJobs),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
