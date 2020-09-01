import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Medico} from "../model/medico";
import {Usuario} from "../model/usuario";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DoctorsService} from "./doctors.service";
import {UserService} from "../new-user/user.service";
import {AppointmentsService} from "../appointments/appointments.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Agendamento} from "../model/agendamento";
import {DialogCreateDoctorComponent} from "./dialog-create-doctor/dialog-create-doctor.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TitleService} from "../system-layout/title.service";
import {DialogCreateAppointmentComponent} from "../appointments/dialog-create-appointment/dialog-create-appointment.component";

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

    displayedColumns: string[] = ['cod', 'doctor', 'especialidade', 'actions'];
    dataSource: MatTableDataSource<Medico>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private doctorsService: DoctorsService,
                private titleService: TitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.listAll();
        this.titleService.setTitle('Doctors');
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    listAll() {
        this.doctorsService.listAll()
            .subscribe(doctors => {
                this.dataSource = new MatTableDataSource(doctors);
            });
    }


    editar(medico: Medico) {
        const dialogRef = this.dialog.open(DialogCreateDoctorComponent, {
            width: '788px', data: medico
        });
        this.subscribeResult(dialogRef);
    }

    excluir(medico: Medico) {
        this.doctorsService.delete(medico.id)
            .subscribe(() => {
                    this.listAll();
                    this.ngOnInit();
                    this.snackBar.open('Doctor removed with success');
                },
                error => this.snackBar.open('Error removing Doctor'));


    }

    create() {
        const dialogRef = this.dialog.open(DialogCreateDoctorComponent, {
            width: '788px',
        });
        this.subscribeResult(dialogRef);
    }

    subscribeResult(dialogRef) {
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result.resultado === 'success') {
                this.listAll();
                this.ngOnInit();
            }
        });
    }
}



