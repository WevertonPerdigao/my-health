import {Component, Input, OnInit} from '@angular/core';
import {Categoria} from "../categoria";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {


    @Input() categoria: Categoria;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }


    redirectDetail(categoria: Categoria) {
        this.router.navigate([`category-detail/${categoria.id}`], {relativeTo: this.route});
    }

}
