import {Component, Inject, OnInit} from '@angular/core';
import {Medico} from "../../../../model/medico";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DoctorsService} from "../../../../doctors/doctors.service";
import {UserService} from "../../../../new-user/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Agendamento} from "../../../../model/agendamento";
import {CompraDTO} from "../categoria-detail.component";

@Component({
    selector: 'app-realizar-compra',
    templateUrl: './realizar-compra.component.html',
    styleUrls: ['./realizar-compra.component.scss']
})
export class RealizarCompraComponent implements OnInit {

    compra: CompraDTO;

    quantidade = new FormControl(0, Validators.required);

    constructor(public dialogRef: MatDialogRef<RealizarCompraComponent>,
                private fb: FormBuilder,
                private snackBar: MatSnackBar,
                @Inject(MAT_DIALOG_DATA) public data: CompraDTO) {
    }

    ngOnInit(): void {
        this.compra = this.data;
        console.log(this.data);
        this.quantidade.setValue(this.compra.quantidade);

    }


    salvar() {
        this.dialogRef.close({resultado: 'close'});
        // const compra: CompraDTO = this.compraForm.value;
        // this.isEdit() ? this.edit(medico) : this.create(medico);


    }


    edit(compra: CompraDTO) {

    }


    close() {
        this.dialogRef.close({resultado: 'close'});
    }
}


