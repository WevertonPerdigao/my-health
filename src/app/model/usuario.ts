export class Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}
