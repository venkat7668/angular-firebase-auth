import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { CommonService } from '../services/common.service'

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private commonService: CommonService) {

    }
    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        if (this.commonService.isLoggedIn) {
            return true;
        }
        this.commonService.redirectURL = state.url;
        this.router.navigate(['/login']);
    }
}