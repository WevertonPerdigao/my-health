import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Token} from "./token";
import {Login} from "./LoginForm";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    readonly basePathAuth = `${environment.api}/auth`;


    constructor(private http: HttpClient,
                private tokenService: TokenService,
                private router: Router,
                private snackbar: MatSnackBar) {

    }


    login(login: Login): Observable<Token> {
        return this.http.post<Token>(this.basePathAuth, login);
    }

    amazenaToken = (token: Token) => this.tokenService.setToken(token.token);

    getToken = () => this.tokenService.getToken();

    hasAccessToken = (): boolean => !!this.getToken();

    logout() {
        this.tokenService.clearStorage();
        this.router.navigate(['/login']);
    }

    sessionExpired() {
        this.snackbar.open("Session expired");
        this.logout();
    }
}

