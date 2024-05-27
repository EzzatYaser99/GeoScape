import { Routes } from '@angular/router';
import {HomeComponent} from "./Pages/home/home.component";

export const routes: Routes = [
  {
    path: 'login', loadComponent: () => import('./Pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./Pages/main/main.component').then((m) => m.MainComponent),
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home'},
    ],
  },
  { path: '**', redirectTo: 'home' },

];
