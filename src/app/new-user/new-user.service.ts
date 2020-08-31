import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Login} from "../login/LoginForm";
import {Observable} from "rxjs";
import {Usuario} from "./usuario";


@Injectable({
    providedIn: 'root',
})
export class NewUserService {

    readonly basePathUser = `${environment.api}/myhealth/user`;


    constructor(private http: HttpClient) {

    }

    createUser(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${this.basePathUser}`, usuario);
    }


}
