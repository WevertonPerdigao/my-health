import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AppointmentsService} from "./appointments.service";
import {Agendamento} from "../model/agendamento";
import {TitleService} from "../system-layout/title.service";
import {DialogCreateAppointmentComponent} from "./dialog-create-appointment/dialog-create-appointment.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
    displayedColumns: string[] = ['cod', 'client', 'doctor', 'especialidade', 'data', 'actions'];
    dataSource: MatTableDataSource<Agendamento>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private appointmentsService: AppointmentsService,
                private titleService: TitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.listAppointments();
        this.titleService.setTitle('Medical Appointments');
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

    listAppointments() {
        this.appointmentsService.listAll()
            .subscribe(appointments => {
                this.dataSource = new MatTableDataSource(appointments);
            });
    }


    editar(appointment: Agendamento) {
        const dialogRef = this.dialog.open(DialogCreateAppointmentComponent, {
            width: '788px', data: appointment
        });

        dialogRef.afterClosed().subscribe(result => {
            // console.log(result);
            if (result.resultado === 'success') {
            }
        });
    }

    excluir(row: any) {

        const appointments = this.dataSource.data;
        const index = appointments.indexOf(row);

        if (index >= 0) {
            appointments.splice(index, 1);
            this.dataSource = new MatTableDataSource(appointments);
            this.ngOnInit();
            this.snackBar.open('Medical Appointiment removed with success');
        }
    }

    createAppointment() {
        /* abre dialog e retorna a referência */

        // dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(DialogCreateAppointmentComponent, {
            width: '788px',
        });

        dialogRef.afterClosed().subscribe(result => {
            // console.log(result);
            if (result.resultado === 'success') {
            }
        });

    }
}



