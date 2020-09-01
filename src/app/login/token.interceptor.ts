import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class TokenInterceptor implements HttpInterceptor {


    constructor(private auth: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.tryByTypeRequest(request));
    }

    tryByTypeRequest(request) {
        return !this.isRequestPermitAll(request) ? this.getCloneRequestBearer(request) : request;
    }

    getCloneRequestBearer = (request: HttpRequest<any>): HttpRequest<any> => request.clone({setHeaders: {Authorization: `Bearer ${this.auth.getToken()}`}});

    isRequestPermitAll = (request: HttpResponse<any>): boolean => request.url.includes('auth') || (request['method'] === 'POST' && request.url.includes('usuarios'));
}
