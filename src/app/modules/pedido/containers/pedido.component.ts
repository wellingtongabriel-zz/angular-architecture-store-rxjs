import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido.model";
import { PedidoFacade } from "../pedido.facade";

@Component({
    selector: 'app-pedido',
    templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {

    pedidos$: Observable<Array<Pedido>>;
    carregando$: Observable<boolean>;

    constructor(private pedidoFacade: PedidoFacade) {
        this.pedidos$ = pedidoFacade.pedidos$;
        this.carregando$ = pedidoFacade.carregando$;
    }

    ngOnInit(): void {
        this.pedidoFacade.carregaListaPedidos();
    }
}