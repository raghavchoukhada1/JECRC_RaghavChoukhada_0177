import { CanActivateFn } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard:CanActivateFn=()=>{
const auth=inject(Auth)
const router=inject(Router)
if(auth.isAuthentiactaion()){
  return true;
}
router.navigate(['/login'])
  return false;
}