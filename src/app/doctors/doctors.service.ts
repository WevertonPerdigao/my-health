import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Medico} from "../model/medico";
import {environment} from "../../environments/environment";
import {Usuario} from "../model/usuario";
import {Agendamento} from "../model/agendamento";

@Injectable({
    providedIn: 'root'
})
export class DoctorsService {
    readonly basePathDoctors = `${environment.api}/medicos`;

    constructor(private httpClient: HttpClient) {
    }

    listAll(): Observable<Medico[]> {
        return this.httpClient.get<Medico[]>(this.basePathDoctors);
    }

    create(medico: Medico): Observable<Medico> {
        return this.httpClient.post<Medico>(`${this.basePathDoctors}`, medico);
    }
    edit(medico: Medico): Observable<Medico> {
        return this.httpClient.put<Medico>(`${this.basePathDoctors}`, medico);
    }

    delete(id: number) {
        return this.httpClient.delete<Medico>(`${this.basePathDoctors}/${id}`);
    }

}
