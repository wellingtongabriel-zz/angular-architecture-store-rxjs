import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { Pedido } from "../models/pedido.model";
import { PedidoState } from "./pedido.state";

const pedidoStateDefault: PedidoState = {
    pedidos: new Array<Pedido>()
};

@Injectable()
export class PedidoStore { 
    
    private readonly pedidoState = new BehaviorSubject<PedidoState>(pedidoStateDefault);

    get pedidoState$() : Observable<PedidoState> {
        return this.pedidoState.asObservable().pipe(filter((state) => !!state));
    }

    adicionaListaPedidos(pedidos: Array<Pedido>): void {
        this.pedidoState.next({
            ...this.pedidoState.getValue(),
            pedidos
        })
    }
}