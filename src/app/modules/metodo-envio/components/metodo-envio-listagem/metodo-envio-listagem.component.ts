import { Component, Input } from "@angular/core";
import { MetodoEnvioItem } from "../../models/metodo-envio-item.model";

@Component({
    selector: 'app-metodo-envio-listagem',
    templateUrl: './metodo-envio-listagem.component.html',
    styleUrls: ['./metodo-envio-listagem.component.scss']
})
export class MetodoEnvioListagemComponent {

    @Input() listaMetodosEnvios: Array<MetodoEnvioItem>;
    @Input() carregando: boolean;

    constructor() {
        this.listaMetodosEnvios = [];
        this.carregando = false;
    }
}