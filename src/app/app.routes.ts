import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'HOME',
    loadComponent: () => import('../app/main/home/home.component'),
  },
  /* {
    path: '',
    title: '',
    loadComponent: () => import(''),
  }, */
  /* {
    path: '',
    title: '',
    loadComponent: () => import(''),
  }, */
  /* {
    path: '',
    title: '',
    loadComponent: () => import(''),
  }, */
  /* {
    path: '',
    title: '',
    loadComponent: () => import(''),
  }, */
  /* {
    path: '',
    title: '',
    loadComponent: () => import(''),
  }, */
  /* {
    path: '',
    title: '',
    loadComponent: () => import(''),
  }, */
  /* {
    path: '',
    title: '',
    loadComponent: () => import(''),
  }, */
  /* {
    path: '',
    title: '',
    loadComponent: () => import(''),
  }, */

  { path: '**', redirectTo: 'home' },
];
