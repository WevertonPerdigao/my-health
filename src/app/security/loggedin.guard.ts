import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../login/auth.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
    constructor(
        private authService: AuthService,
    ) {
    }


    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.hasAccessToken()) {
            return true;
        } else {
            console.log('logout');
            this.authService.logout();
        }
    }
}
