import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente.model";

@Injectable()
export class ClienteService {

    constructor(private http: HttpClient) {}

    obterClientes(): Observable<Array<Cliente>> {
        return this.http.get<Array<Cliente>>('http://localhost:3000/clientes');
    }
}