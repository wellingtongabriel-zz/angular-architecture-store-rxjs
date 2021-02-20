import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from "ng-zorro-antd/input";
import { LoginFormularioComponent } from "./components/login-formulario/login-formulario.component";
import { LoginComponent } from "./containers/login.component";
import { LoginFacade } from "./Login.facade";
import { loginRoutes } from "./login.routes";
import { LoginStore } from "./state/login.store";


@NgModule({
    declarations: [
        LoginComponent,
        LoginFormularioComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NzGridModule,
        NzCardModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        RouterModule.forChild(loginRoutes)
    ],
    providers: [
        LoginStore,
        LoginFacade
    ]
})
export class LoginModule {}