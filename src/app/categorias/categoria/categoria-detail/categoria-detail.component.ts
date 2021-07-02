import {Component, OnInit} from '@angular/core';
import {DialogCreateDoctorComponent} from "../../../doctors/dialog-create-doctor/dialog-create-doctor.component";
import {MatDialog} from "@angular/material/dialog";
import {RealizarCompraComponent} from "./realizar-compra/realizar-compra.component";


export interface CompraDTO {
    produto: string;
    validade: Date;
    quantidade: number;
    precoUnitario: number;
    precoTotaL: number;
}

const ELEMENT_DATA: CompraDTO[] = [
    {produto: 'Patinho', validade: new Date('2021-06-01'), quantidade: 21, precoUnitario: 21, precoTotaL: 420},
    {produto: 'Contra Filé', validade: new Date('2021-06-01'), quantidade: 21, precoUnitario: 21, precoTotaL: 420},
    {produto: 'Alcatra', validade: new Date('2021-06-01'), quantidade: 21, precoUnitario: 21, precoTotaL: 420},
    {produto: 'Picanha', validade: new Date('2021-06-01'), quantidade: 21, precoUnitario: 21, precoTotaL: 420},
    {produto: 'Coxão Mole', validade: new Date('2021-06-01'), quantidade: 21, precoUnitario: 21, precoTotaL: 420},
    {produto: 'Maminha', validade: new Date('2021-06-01'), quantidade: 21, precoUnitario: 21, precoTotaL: 420},
    {produto: 'Camarão', validade: new Date('2021-06-01'), quantidade: 21, precoUnitario: 21, precoTotaL: 420},
    {produto: 'Lagosta', validade: new Date('2021-06-01'), quantidade: 21, precoUnitario: 21, precoTotaL: 420},


];


@Component({
    selector: 'app-categoria-detail',
    templateUrl: './categoria-detail.component.html',
    styleUrls: ['./categoria-detail.component.scss']
})
export class CategoriaDetailComponent implements OnInit {

    displayedColumns: string[] = ['produto', 'validade', 'quantidade', 'precoUnitario', 'precoTotaL', 'actions'];
    dataSource = ELEMENT_DATA;

    constructor(
        private dialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
    }

    create(compraDto: CompraDTO) {
        const dialogRef = this.dialog.open(RealizarCompraComponent, {
            width: '788px', data: compraDto
        });
        this.subscribeResult(dialogRef);
    }

    subscribeResult(dialogRef) {
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result.resultado === 'success') {
                // this.listAll();
                this.ngOnInit();
            }
        });
    }
}
