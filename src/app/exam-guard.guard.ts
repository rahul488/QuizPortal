import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ExamGuardGuard implements CanActivate {
  
  constructor(private router:Router,private userService:UserService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if(localStorage.getItem('isVisited') != 'true' && this.userService.isLoggedIn()){
      return true;
    }
      
this.router.navigate(['/userhome']);
return false;



  }
  
}
