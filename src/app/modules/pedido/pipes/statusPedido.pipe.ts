import { Pipe, PipeTransform } from "@angular/core";
import { PedidoStatusEnum } from "../models/enums/pedido-status.enum";

@Pipe({
    name: 'statusPedido'
})
export class StatusPedidoPipe implements PipeTransform {
    transform(status: PedidoStatusEnum) {
        switch(status) { 
            case PedidoStatusEnum.Cancelado:
               return 'default';
            case PedidoStatusEnum.Completo: 
               return 'success'; 
            case PedidoStatusEnum.Erro:
                return 'error';
            case PedidoStatusEnum.Integrado:
                return 'warning';
            default: 
               return 'processing'; 
        } 
    }
}