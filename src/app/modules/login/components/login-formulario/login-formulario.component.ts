import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Login } from "../../models/login.model";

@Component({
    selector: 'app-login-formulario',
    templateUrl: './login-formulario.component.html',
    styleUrls: ['./login-formulario.component.scss']
})
export class LoginFormularioComponent {

    @Input() login: Login;
    @Output() onLogar: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.login = new Login();
    }

    logar(): void {
        this.onLogar.emit();
    }
}