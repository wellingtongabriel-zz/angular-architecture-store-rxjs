import { Component } from "@angular/core";
import { MetodoEnvioFacade } from "../../metodo-envio.facade";
import { MetodoEnvio } from "../../models/metofo-envio.model";

@Component({
    selector: 'app-metodo-envio-criacao',
    templateUrl: './metodo-envio-criacao.component.html',
    styleUrls: ['./metodo-envio-criacao.component.scss']
})
export class MetodoEnvioCriacaoComponent {
    
    metodoEnvio: MetodoEnvio;

    constructor(private metodoEnvioFacade: MetodoEnvioFacade) {
        this.metodoEnvio = new MetodoEnvio();
    }   

    salvarFormularioMetodoEnvio(): void {
        this.metodoEnvioFacade.adicionarMetodoEnvio(this.metodoEnvio);
    }
}