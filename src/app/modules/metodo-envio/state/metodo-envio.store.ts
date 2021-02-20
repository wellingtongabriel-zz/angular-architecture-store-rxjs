import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { MetodoEnvioItem } from "../models/metodo-envio-item.model";
import { MetodoEnvio } from "../models/metofo-envio.model";
import { MetodoEnvioState } from "./metodo-envio.state";

const metodoEnvioStateDefault: MetodoEnvioState = {
    metodosEnvios: new Array<MetodoEnvioItem>(),
    metodoEnvioFormulario: new MetodoEnvio()
}

@Injectable()
export class MetodoEnvioStore {

    private readonly metodoEnvioState = new BehaviorSubject<MetodoEnvioState>(metodoEnvioStateDefault);

    get metodoEnvioState$(): Observable<MetodoEnvioState> {
        return this.metodoEnvioState.asObservable().pipe(filter((state) => !!state));
    }

    adicionaListaMetodoEnvio(metodosEnvios: Array<MetodoEnvioItem>): void {
        this.metodoEnvioState.next({
            ...this.metodoEnvioState.getValue(),
            metodosEnvios
        })
    }

    atribuiValor(metodoEnvio: MetodoEnvio): void {
        this.metodoEnvioState.next({
            ...this.metodoEnvioState.getValue(),
            metodoEnvioFormulario: metodoEnvio
        })
    }
}