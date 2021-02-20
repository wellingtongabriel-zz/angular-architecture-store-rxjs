import { Component } from "@angular/core";
import { LoginFacade } from "../Login.facade";
import { Login } from "../models/login.model";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    
    login: Login = new Login();

    constructor(private loginFacade: LoginFacade) {}

    logar() {
        this.loginFacade.Logar(this.login);
    }
}