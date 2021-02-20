import { PedidoStatusEnum } from "./enums/pedido-status.enum";

export interface Pedido {
    pedido: string;
    dataCriacao: Date;
    loja: string;
    canal: string;
    status: PedidoStatusEnum,
}