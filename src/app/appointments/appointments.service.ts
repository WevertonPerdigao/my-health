import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Agendamento} from "../model/agendamento";
import {Observable, of} from "rxjs";
import {environment} from '../../environments/environment';

@Injectable(
    {providedIn: 'root'}
)
export class AppointmentsService {

    readonly basePathAgendamentos = `${environment.api}/agendamentos`;


    constructor(private httpClient: HttpClient) {
    }

    listAll(): Observable<Agendamento[]> {

        return this.httpClient.get<Agendamento[]>(this.basePathAgendamentos);
    }

    create(appointment: Agendamento): Observable<any> {
        return this.httpClient.post(this.basePathAgendamentos, appointment);
    }

    edit(appointment: Agendamento): Observable<any> {
        return this.httpClient.put(this.basePathAgendamentos, appointment);
    }

    delete(id: number) {
        return this.httpClient.delete<Agendamento>(`${this.basePathAgendamentos}/${id}`);
    }

    findById(id: number): Observable<Agendamento> {
        return this.httpClient.get<Agendamento>(`${this.basePathAgendamentos}/${id}`);
    }

}
