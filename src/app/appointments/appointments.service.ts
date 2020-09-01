import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Agendamento} from "../model/agendamento";
import {Observable, of} from "rxjs";
import {environment} from '../../environments/environment';
import {Medico} from "../model/medico";
import {Usuario} from '../model/usuario';

@Injectable(
    {providedIn: 'root'}
)
export class AppointmentsService {

    readonly basePathUser = `${environment.api}/agendamentos`;

    index = 0;

    constructor(private httpClient: HttpClient) {
    }

    listAll(): Observable<Agendamento[]> {
        return of(this.getDadosAgendamentos());
        // return this.httpClient.get<Agendamento[]>(this.basePathUser);
    }

    create(appointment: Agendamento): Observable<any> {
        return this.httpClient.post(this.basePathUser, appointment);
    }

    edit(appointment: Agendamento): Observable<any> {
        return this.httpClient.put(this.basePathUser, appointment);
    }

    findById(id: number): Observable<Agendamento> {
        return this.httpClient.get<Agendamento>(`${this.basePathUser}/${id}`);
    }

    getDadosAgendamentos(): Agendamento[] {
        return Array.from({length: 100}, (_, k) => this.getModel());
    }

    getModel() {
        this.index++;
        return {
            id: this.index,
            data: new Date(),
            medico: new Medico('weverton ' + this.index, 'Cirurgião Geral ' + this.index),
            usuario: new Usuario('Usuario ' + this.index)
        };

    }

}
