import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {SharedModule} from "../shared/shared.module";
import {DialogCreateAppointmentComponent} from "./dialog-create-appointment/dialog-create-appointment.component";
import {AppointmentsComponent} from "./appointments.component";

// @ts-ignore
const ROUTES: Routes = [
    {path: '', component: AppointmentsComponent}
];


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)],
    declarations: [AppointmentsComponent, DialogCreateAppointmentComponent],
    entryComponents: [DialogCreateAppointmentComponent]
})

export class AppointmentsModule {

    constructor() {
    }
}
