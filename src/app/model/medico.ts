export class Medico {
    id: number;
    nome: string;
    especialidade: string;

    constructor(nome: string, especialidade: string) {
        this.nome = nome;
        this.especialidade = especialidade;
    }
}
