import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {Usuario} from "../model/usuario";


@Injectable({
    providedIn: 'root',
})
export class UserService {

    readonly basePathUser = `${environment.api}/users`;

    index = 0;

    constructor(private httpClient: HttpClient) {
    }

    createUser(usuario: Usuario): Observable<Usuario> {
        return this.httpClient.post<Usuario>(`${this.basePathUser}`, usuario);
    }

    listAll(): Observable<Usuario[]> {
        return of(this.getUsuarios());
        // return this.httpClient.get<Usuario[]>(this.basePathUser);
    }

    getUsuarios(): Usuario[] {

        return Array.from({length: 2}, (_, k) =>
            new Usuario("Geraldo" + this.index++));

    }


}
