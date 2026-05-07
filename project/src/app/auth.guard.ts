import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('userToken');

  if (isLoggedIn && isLoggedIn.startsWith("signed")) {
    return true; // מאפשר את הניווט
  } else {
    router.navigate(['/login']);
    return false; // חוסם את הניווט
  }

};


