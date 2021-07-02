import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriasComponent} from "./categorias.component";
import {RouterModule, Routes} from "@angular/router";
import {AppointmentsComponent} from "../appointments/appointments.component";
import {SharedModule} from "../shared/shared.module";
import {CategoriaComponent} from './categoria/categoria.component';
import {CategoriaDetailComponent} from './categoria/categoria-detail/categoria-detail.component';
import {RealizarCompraComponent} from './categoria/categoria-detail/realizar-compra/realizar-compra.component';
import {DialogCreateDoctorComponent} from "../doctors/dialog-create-doctor/dialog-create-doctor.component";


const ROUTES: Routes = [
    {path: '', component: CategoriasComponent},
    {path: 'category-detail/:id', component: CategoriaDetailComponent}
];


@NgModule({
    declarations: [CategoriasComponent, CategoriaComponent, CategoriaDetailComponent, RealizarCompraComponent],
    entryComponents: [RealizarCompraComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES),
        CommonModule
    ]
})
export class CategoriasModule {
}
