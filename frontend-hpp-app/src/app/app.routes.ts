import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'public/login', pathMatch: 'full' },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'secure',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./secure/secure.module').then((m) => m.SecureModule),
  },
];
