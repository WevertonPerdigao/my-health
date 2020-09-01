import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LayoutModule} from "@angular/cdk/layout";
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
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
    imports: [CommonModule, LayoutModule],
    exports: [
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
        MatNativeDateModule,
        ReactiveFormsModule,
        CommonModule
    ]
})

export class SharedModule {

}
