import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { Cliente } from "../models/cliente.model";
import { ClienteState } from "./cliente.state";

const stateDefault: ClienteState = {
    clientes: []
};

@Injectable()
export class ClienteStore {
    
    private readonly clienteState = new BehaviorSubject<ClienteState>(stateDefault);
    private readonly mensagemState = new Subject<string>();

    constructor(){}

    get clienteState$(): Observable<ClienteState> {
        return this.clienteState.asObservable().pipe(filter((state) => !!state));
    }

    get mensagens$(): Observable<string> {
        return this.mensagemState.asObservable();
    }

    setarClientes(clientes: Array<Cliente>): void {
        this.clienteState.next({
            ...this.clienteState.getValue(),
            clientes
        });
        
        this.mensagemState.next('Teste mensagem aqui!!!');
        this.mensagemState.next('Teste 2 mensagem aqui!!!');
    }
}