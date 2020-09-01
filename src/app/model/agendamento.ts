import {Usuario} from './usuario';
import {Medico} from './medico';

export class Agendamento {
    id: number;
    medico: Medico;
    data: Date;
    usuario: Usuario;
}
