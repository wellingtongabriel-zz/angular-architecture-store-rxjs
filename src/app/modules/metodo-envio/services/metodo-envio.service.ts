import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { MetodoEnvioItem } from "../models/metodo-envio-item.model";
import { listaMetodoEnvio } from "./data";

@Injectable()
export class MetodoEnvioService {

    obterListaMetodosEnvios(): Observable<Array<MetodoEnvioItem>> {
        return of(listaMetodoEnvio).pipe(delay(800));
    }
}