import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { finalize, map } from "rxjs/operators";
import { Pedido } from "./models/pedido.model";
import { ClienteService } from "./services/pedido.service";
import { PedidoStore } from "./state/pedido.store";

@Injectable()
export class PedidoFacade {

    private carregandoState = new BehaviorSubject<boolean>(false); 

    constructor(
        private pedidoStore: PedidoStore,
        private pedidoService: ClienteService
    ) {}

    get carregando$(): Observable<boolean>{
        return this.carregandoState.asObservable();
    }

    get pedidos$(): Observable<Array<Pedido>> {
        return this.pedidoStore.pedidoState$.pipe(map((state) => state.pedidos));
    }

    carregaListaPedidos(): void {

        this.carregandoState.next(true);

        this.pedidoService
        .obterListaPedidos()
        .pipe(finalize(() => {
            this.carregandoState.next(false)
        }))
        .subscribe((pedidos: Array<Pedido>) => this.pedidoStore.adicionaListaPedidos(pedidos))
    }
}