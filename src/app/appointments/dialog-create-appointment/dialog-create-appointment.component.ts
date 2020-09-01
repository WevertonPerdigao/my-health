import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Medico} from '../../model/medico';
import {DoctorsService} from '../../doctors/doctors.service';
import {Usuario} from '../../model/usuario';
import {UserService} from '../../new-user/user.service';
import {AppointmentsService} from "../appointments.service";
import {Agendamento} from "../../model/agendamento";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-dialog-create-appointment',
    templateUrl: './dialog-create-appointment.component.html',
    styleUrls: ['./dialog-create-appointment.component.scss']
})
export class DialogCreateAppointmentComponent implements OnInit {

    doctors: Medico[] = [];
    clients: Usuario[] = [];
    minDate = new Date();

    appointmentForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<DialogCreateAppointmentComponent>,
                private fb: FormBuilder,
                private  doctorsService: DoctorsService,
                private clientService: UserService,
                private appointmentsService: AppointmentsService,
                private snackBar: MatSnackBar,
                @Inject(MAT_DIALOG_DATA) public data: Agendamento) {
    }

    ngOnInit(): void {
        this.creatForm();
        this.listUsers();
        this.listDoctors();

        if (this.isEdit()) {
            this.appointmentForm.patchValue(this.data);
        }
    }

    isEdit = () => this.data && this.data.id > 0;


    creatForm() {
        this.appointmentForm = this.fb.group(
            {
                medico: this.fb.control('', [Validators.required]),
                usuario: this.fb.control('', [Validators.required]),
                data: this.fb.control('', [Validators.required]),
                id: new FormControl(),
            });

    }

    listDoctors() {
        this.doctorsService.listAll()
            .subscribe(doctors => this.doctors = doctors);
    }

    listUsers() {
        this.clientService.listAll()
            .subscribe(clients => this.clients = clients);
    }


    compareDoctor(d1: Medico, d2: Medico) {
        return d1 && d2 ? d1.id === d2.id : d1 === d2;
    }

    compareClient(c1: Usuario, c2: Usuario) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }

    salvar() {
        const appointment: Agendamento = this.appointmentForm.value;
        this.isEdit() ? this.edit(appointment) : this.create(appointment);


    }

    create(appointment: Agendamento) {
        this.appointmentsService.create(appointment)
            .subscribe(result => {
                    this.snackBar.open('Medical appointment created with success');
                    this.dialogRef.close({resultado: 'success'});

                },
                error => this.snackBar.open('Error when create medical appointment')
            );
    }

    edit(appointment: Agendamento) {
        this.appointmentsService.create(appointment)
            .subscribe(result => {
                    this.snackBar.open('Medical appointment edited¶ with success');
                    this.dialogRef.close({resultado: 'success'});

                },
                error => this.snackBar.open('Error when edit medical appointment')
            );
    }


    close() {
        this.dialogRef.close({resultado: 'close'});
    }
}
