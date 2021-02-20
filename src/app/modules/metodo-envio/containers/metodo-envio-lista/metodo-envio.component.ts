import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MetodoEnvioFacade } from "../../metodo-envio.facade";
import { MetodoEnvioItem } from "../../models/metodo-envio-item.model";

@Component({
    selector: 'app-metodo-envio',
    templateUrl: './metodo-envio.component.html',
    styleUrls: ['./metodo-envio.component.scss']
})
export class MetodoEnvioComponent implements OnInit {

    metodosEnvios$: Observable<Array<MetodoEnvioItem>>;
    carregando$: Observable<boolean>;

    constructor(private metodoEnvioFacade: MetodoEnvioFacade) {
        this.metodosEnvios$ = metodoEnvioFacade.metodosEnvios$;
        this.carregando$ = metodoEnvioFacade.carregando$;
    }   

    ngOnInit(): void {
        this.metodoEnvioFacade.carregaListaMetodosEnvios();
    }
}