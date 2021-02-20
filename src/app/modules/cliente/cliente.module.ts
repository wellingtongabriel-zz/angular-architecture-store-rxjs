import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClienteFacade } from "./cliente.facade";
import { clienteRoutes } from "./cliente.routes";
import { ClienteListagemComponent } from './components/cliente-listagem/cliente-listagem.component';
import { ClienteComponent } from "./containers/cliente.component";
import { ClienteService } from "./services/cliente.service";
import { ClienteStore } from "./state/cliente.store";

@NgModule({
    declarations: [
        ClienteComponent,
        ClienteListagemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(clienteRoutes)
    ],
    providers: [
        ClienteService,
        ClienteFacade,
        ClienteStore
    ]
})
export class ClienteModule {}