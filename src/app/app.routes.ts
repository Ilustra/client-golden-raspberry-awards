import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard) },
    { path: 'list-all-movie', loadComponent: () => import('./list-all-movie/list-all-movie').then(m => m.ListAllMovie) }
];
