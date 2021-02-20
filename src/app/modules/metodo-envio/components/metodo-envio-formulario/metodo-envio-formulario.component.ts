import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MetodoEnvio } from "../../models/metofo-envio.model";

@Component({
    selector: 'app-metodo-envio-formulario',
    templateUrl: './metodo-envio-formulario.component.html',
    styleUrls: ['./metodo-envio-formulario.component.scss']
})
export class MetodoEnvioFormularioComponent {
    
    @Input() metodoEnvio = new MetodoEnvio();
    @Output() onSalvarFormularioMetodoEnvio: EventEmitter<boolean> = new EventEmitter();

    salvarFormulario(): void {
        this.onSalvarFormularioMetodoEnvio.emit();
    }
}