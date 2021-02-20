import { Component, Input, OnInit } from "@angular/core";
import { Cliente } from "../../models/cliente.model";

@Component({
    selector: 'app-cliente-listagem',
    templateUrl: './cliente-listagem.component.html',
    styleUrls: ['./cliente-listagem.component.scss']
})
export class ClienteListagemComponent implements OnInit {
    
    @Input() clientes: Array<Cliente> = [];

    constructor() {}

    ngOnInit(): void {
    }
}