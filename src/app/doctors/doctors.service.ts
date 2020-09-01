import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Medico} from "../model/medico";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DoctorsService {
    readonly basePathDoctors = `${environment.api}/doctors`;

    index = 0;

    constructor(private httpClient: HttpClient) {
    }

    listAll(): Observable<Medico[]> {
        return of(this.getMedicos());
        //  return this.httpClient.get<Medico[]>(this.basePathDoctors);
    }


    getMedicos(): Medico[] {

        return Array.from({length: 2}, (_, k) =>
            new Medico("Weverton" + this.index++, "Neurologista"+ this.index++));

    }
}
