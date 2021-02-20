import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ClienteFacade } from "../cliente.facade";
import { Cliente } from "../models/cliente.model";

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {
    
    clientes$: Observable<Array<Cliente>>;

    constructor(private clienteFacade: ClienteFacade) {
        this.clientes$ = clienteFacade.clientes$;
    }
    
    ngOnInit(): void {
        this.clienteFacade.carregarClientes();
        this.clienteFacade.mensagens$.subscribe(x => console.log('x', x));
    }
}