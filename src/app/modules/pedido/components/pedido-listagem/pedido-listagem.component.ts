import { Component, Input } from "@angular/core";
import { Pedido } from "../../models/pedido.model";

@Component({
    selector: 'app-pedido-listagem',
    templateUrl: './pedido-listagem.component.html',
    styleUrls: ['./pedido-listagem.component.scss']
})
export class PedidoListagemComponent {

    @Input() listaPedidos: Array<Pedido>;
    @Input() carregando: boolean;

    constructor() {
        this.listaPedidos = [];
        this.carregando = false;
    }
}

