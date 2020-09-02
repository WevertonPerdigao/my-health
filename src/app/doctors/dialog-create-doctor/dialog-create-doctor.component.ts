import {Component, Inject, OnInit} from '@angular/core';
import {Medico} from "../../model/medico";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DoctorsService} from "../doctors.service";
import {UserService} from "../../new-user/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Agendamento} from "../../model/agendamento";

@Component({
    selector: 'app-dialog-create-doctor',
    templateUrl: './dialog-create-doctor.component.html',
    styleUrls: ['./dialog-create-doctor.component.scss']
})
export class DialogCreateDoctorComponent implements OnInit {
    doctors: Medico[] = [];

    doctorForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<DialogCreateDoctorComponent>,
                private fb: FormBuilder,
                private  doctorsService: DoctorsService,
                private clientService: UserService,
                private snackBar: MatSnackBar,
                @Inject(MAT_DIALOG_DATA) public data: Agendamento) {
    }

    ngOnInit(): void {
        this.creatForm();

        if (this.isEdit()) {
            this.doctorForm.patchValue(this.data);
        }
    }

    isEdit = () => this.data && this.data.id > 0;


    creatForm() {
        this.doctorForm = this.fb.group(
            {
                nome: this.fb.control('', [Validators.required]),
                especialidade: this.fb.control('', [Validators.required]),
                id: new FormControl(),
            });

    }


    salvar() {
        const medico: Medico = this.doctorForm.value;
        this.isEdit() ? this.edit(medico) : this.create(medico);


    }

    create(medico: Medico) {
        this.doctorsService.create(medico)
            .subscribe(result => {
                    this.snackBar.open('Doctor created with success');
                    this.dialogRef.close({resultado: 'success'});

                },
                error => this.snackBar.open('Error when create Doctor appointment')
            );
    }

    edit(medico: Medico) {
        this.doctorsService.create(medico)
            .subscribe(result => {
                    this.snackBar.open('Doctor edited with success');
                    this.dialogRef.close({resultado: 'success'});

                },
                error => this.snackBar.open('Error when edit Doctor')
            );
    }


    close() {
        this.dialogRef.close({resultado: 'close'});
    }
}
