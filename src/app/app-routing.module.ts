import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NewUserComponent} from './new-user/new-user.component';
import {SystemLayoutComponent} from './system-layout/system-layout.component';
import {LoggedinGuard} from "./security/loggedin.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
    {
        path: '',
        component: SystemLayoutComponent,
        canActivate: [LoggedinGuard],
        canLoad: [LoggedinGuard],
        children: [
            {path: '', redirectTo: 'categorias', pathMatch: 'full'},
            {
                path: 'kkkkk',
                loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule)
            },
            {
                path: 'kkkkkkkk',
                loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule)
            },
            {
                path: 'dashboard', component: DashboardComponent
            },
            {
                path: 'categorias',
                loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)
            },

        ]
    },
    {
        path: 'login', component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'signup', component: NewUserComponent,
        data: {
            title: 'Login'
        }
    },
    {path: '**', redirectTo: 'appointments'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
