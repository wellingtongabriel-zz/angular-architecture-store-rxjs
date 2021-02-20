import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Pedido } from "../models/pedido.model";
import { listaPedidos } from "./data";

@Injectable()
export class ClienteService { 

    obterListaPedidos(): Observable<Array<Pedido>> {
        return of(listaPedidos).pipe(delay(800));
    }
}