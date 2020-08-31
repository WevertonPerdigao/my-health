import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {Constants} from "../utils/constants";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    loginForm: FormGroup;
    private unsubscribe$ = new Subject();

    constructor(private fb: FormBuilder,
                private router: Router,) {
    }

    ngOnInit(): void {

        this.initForm();
    }

    initForm() {
        this.loginForm = this.fb.group({
            username: this.fb.control('', [Validators.required, Validators.pattern(Constants.EMAIL_PATTERN)]),
            password: this.fb.control('', [Validators.required])
        });
    }

    login() {

    }

    siginup() {
        this.router.navigate(['/signup']);
    }
}
