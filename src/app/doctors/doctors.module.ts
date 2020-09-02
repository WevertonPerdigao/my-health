import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DialogCreateDoctorComponent} from "./dialog-create-doctor/dialog-create-doctor.component";
import {DoctorsComponent} from "./doctors.component";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

// @ts-ignore
const ROUTES: Routes = [
    {path: '', component: DoctorsComponent}
];


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)],
    declarations: [DialogCreateDoctorComponent, DoctorsComponent],
    entryComponents: [DialogCreateDoctorComponent]
})

export class DoctorsModule {

    constructor() {
    }
}
