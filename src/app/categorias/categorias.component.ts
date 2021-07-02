import {Component, OnInit} from '@angular/core';
import {Categoria} from "./categoria";
import {ActivatedRoute, Router} from "@angular/router";

const CATEGORIA_MOQ: Categoria[] = [
    {id: 1, nome: 'Perecíveis', urlImage: 'pereciveis'},
    {id: 2, nome: 'Carne e Frios', urlImage: 'carne'},
    {id: 3, nome: 'Feira', urlImage: 'feira'},
    {id: 4, nome: 'Bebidas', urlImage: 'bebidas'},
    {id: 5, nome: 'Refrigerantes', urlImage: 'refrigerantes'},
    {id: 6, nome: 'Limpeza', urlImage: 'limpeza'},
    {id: 7, nome: 'Estoque', urlImage: 'estoque'},
    {id: 8, nome: 'Compras', urlImage: 'compras'},
];


@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

    categorias = [];

    constructor(
      ) {
    }

    ngOnInit(): void {
        this.categorias = CATEGORIA_MOQ;
    }



}
