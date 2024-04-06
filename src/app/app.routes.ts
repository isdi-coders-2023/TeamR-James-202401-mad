import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'HOME',
    loadComponent: () => import('../app/index/home/home.component'),
  },
  {
    path: 'list/:category',
    title: 'LIST',
    loadComponent: () => import('../app/index/list/list.component'),
  },

  {
    path: 'create',
    title: 'FORM',
    loadComponent: () => import('../app/index/form/form.component'),
  },
  {
    path: 'details/:id',
    title: 'DETAILS',
    loadComponent: () => import('../app/index/details/details.component'),
  },

  {
    path: 'error',
    title: '404-NOT FOUND',
    loadComponent: () => import('./index/shared/error/error.component'),
  },

  { path: '**', redirectTo: 'error' },
];
