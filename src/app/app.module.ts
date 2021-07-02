import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NewUserComponent} from './new-user/new-user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SystemLayoutComponent} from './system-layout/system-layout.component';
import {MatListModule} from "@angular/material/list";
import {DoctorsComponent} from './doctors/doctors.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {DialogCreateAppointmentComponent} from './appointments/dialog-create-appointment/dialog-create-appointment.component';
import {MatNativeDateModule} from "@angular/material/core";
import ptBr from '@angular/common/locales/pt';
import {registerLocaleData} from "@angular/common";
import {TokenInterceptor} from "./login/token.interceptor";
import {DialogCreateDoctorComponent} from "./doctors/dialog-create-doctor/dialog-create-doctor.component";
import {DashboardComponent} from './dashboard/dashboard.component';

registerLocaleData(ptBr);

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NewUserComponent,
        SystemLayoutComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        FormsModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatInputModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatTableModule,
        MatSortModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatMenuModule,
        MatTooltipModule,
        MatNativeDateModule
    ],
    providers: [
        {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
        {provide: LOCALE_ID, useValue: 'pt-PT'},
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
