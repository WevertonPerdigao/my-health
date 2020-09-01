import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {Constants} from "../utils/constants";
import {AuthService} from "./auth.service";
import {Login} from "./LoginForm";
import {MatSnackBar} from "@angular/material/snack-bar";
import {tap} from "rxjs/operators";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    loginForm: FormGroup;
    private unsubscribe$ = new Subject();

    constructor(private fb: FormBuilder,
                private router: Router,
                private authService: AuthService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.pattern(Constants.EMAIL_PATTERN)]),
            senha: this.fb.control('', [Validators.required])
        });
    }

    login() {
        const login: Login = this.loginForm.value;

        this.authService.login(login)
            .subscribe(token => {
                this.snackBar.open("Welcome to the MyHealth");
                this.authService.amazenaToken(token);
                this.router.navigate(['/appointments']);
            }, () => this.snackBar.open("E-mail and/or password invalids"));
    }

    siginup() {
        this.router.navigate(['/signup']);
    }
}
