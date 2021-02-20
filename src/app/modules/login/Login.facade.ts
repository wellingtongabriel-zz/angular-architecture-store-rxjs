import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "./models/login.model";

@Injectable()
export class LoginFacade {

    constructor(private router: Router) {}

    Logar(login: Login): void {
        //fazer requisição e salvar no cookie o toje
        this.router.navigate(['/pedido']);
    }
}