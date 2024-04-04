import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'HOME',
    loadComponent: () => import('../app/index/home/home.component'),
  },
  {
    path: 'list',
    title: 'LIST',
    loadComponent: () => import('../app/index/list/list.component'),
  },
  {
    path: 'monsters',
    title: 'MONSTER',
    loadComponent: () => import('../app/index/monster/monster.component'),
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
  {
    path: 'error',
    title: '404-NOT FOUND',
    loadComponent: () => import('./index/shared/error/error.component'),
  },

  { path: '**', redirectTo: 'error' },
];
