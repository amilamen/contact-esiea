import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'contact',
    children: [
      {
        path: '',
        loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
      },
      {
        path: 'new',
        loadComponent: () => import('./contact/new-contact/new-contact.page').then( m => m.NewContactPage)
      }
    ]

  }
];
