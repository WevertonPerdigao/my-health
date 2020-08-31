import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NewUserComponent} from "./new-user/new-user.component";


const routes: Routes = [
    {
        path: "login", component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: "signup", component: NewUserComponent,
        data: {
            title: 'Login'
        }
    },
    {path: "**", redirectTo: "login"}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
