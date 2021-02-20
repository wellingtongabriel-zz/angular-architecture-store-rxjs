import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { Login } from "../models/login.model";
import { LoginState } from "./login.state";

const loginStateDefault: LoginState = {
    login: new Login()
};

@Injectable()
export class LoginStore { 
    
    private readonly loginState = new BehaviorSubject<LoginState>(loginStateDefault);

    get loginState$() : Observable<LoginState> {
        return this.loginState.asObservable().pipe(filter((state) => !!state));
    }
}