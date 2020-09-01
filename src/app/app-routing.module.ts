import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NewUserComponent} from './new-user/new-user.component';
import {SystemLayoutComponent} from './system-layout/system-layout.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {AppointmentsComponent} from './appointments/appointments.component';


const routes: Routes = [
    {
        path: '',
        component: SystemLayoutComponent,
        // canActivate: [LoggedinGuard],
        // canLoad: [LoggedinGuard],
        children: [
            {path: '', redirectTo: 'appointments', pathMatch: 'full'},
            {path: 'appointments', component: AppointmentsComponent},
            {path: 'doctors', component: DoctorsComponent},

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
    {path: '**', redirectTo: 'login'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
