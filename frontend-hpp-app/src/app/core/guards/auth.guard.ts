import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = sessionStorage.getItem('token');
  if (!token) {
    // Redirect to login if no token is found
    router.navigate(['/public/login']);
    return false;
  }
  return true;
};
