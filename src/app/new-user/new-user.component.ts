import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Constants} from "../utils/constants";
import {UserService} from "./user.service";
import {Usuario} from "../model/usuario";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

    formUsuario: FormGroup;

    constructor(private fb: FormBuilder,
                private  newUserService: UserService,
                private snacBar: MatSnackBar,
                private  router: Router) {
    }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.formUsuario = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.pattern(Constants.EMAIL_PATTERN)]),
            senha: this.fb.control('', [Validators.required]),
            nome: this.fb.control('', [Validators.required])
        });
    }


    salvar() {

        const usuario: Usuario = this.formUsuario.value;

        this.newUserService.createUser(usuario).subscribe(
            res => {
                this.snacBar.open("Usuário cadastrado com sucesso");
                this.returnLogin();
            }
            , error => this.snacBar.open("Erro ao cadastrar usuário")
        );

    }

    returnLogin = () => this.router.navigate(['/login']);

}
