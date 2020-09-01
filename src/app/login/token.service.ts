import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class TokenService {

    readonly TOKEN = 'token';

    setToken = (token: string) => localStorage.setItem(this.TOKEN, token);

    getToken = () => localStorage.getItem(this.TOKEN);

    clearStorage = () => localStorage.clear();

}
