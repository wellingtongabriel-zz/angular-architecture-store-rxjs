import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Cliente } from "./models/cliente.model";
import { ClienteService } from "./services/cliente.service";
import { ClienteStore } from "./state/cliente.store";

@Injectable()
export class ClienteFacade {

    constructor(
        private clienteStore: ClienteStore,
        private clienteService: ClienteService) {}

    get clientes$(): Observable<Cliente[]> {
        return this.clienteStore.clienteState$.pipe(map((state) => state.clientes)) || [];
    }

    get mensagens$(): Observable<string> {
        return this.clienteStore.mensagens$;
    }

    carregarClientes(): void {
        this.clienteService.obterClientes()
        .subscribe((clientes: Array<Cliente>) => {
            this.clienteStore.setarClientes(clientes);
        })
    }
}