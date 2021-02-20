import { PedidoStatusEnum } from "../models/enums/pedido-status.enum";
import { Pedido } from "../models/pedido.model";

export interface ColunaTabelaPedido {
    title: string;
    priority: number;
}

export const listaColunasPedidos: Array<ColunaTabelaPedido> = [
    {
      title: 'N° Pedido',
      priority: 1
    },
    {
      title: 'Data de Criação',
      priority: 2
    },
    {
      title: 'loja',
      priority: 3
    },
    {
      title: 'Canal',
      priority: 4
    },
    {
        title: 'Data de Importação',
        priority: 5
    },
    {
        title: 'Status',
        priority: 6
    },
    {
        title: 'Ações',
        priority: 6
    }
];

export const listaPedidos: Array<Pedido> = [
    {
        pedido: '1110993096152-01',
        dataCriacao: new Date(),
        loja: 'Platz',
        canal: 'Casas Bahia',
        status: PedidoStatusEnum.Processando,
    },
    {
        pedido: '1110982511719-01',
        dataCriacao: new Date(),
        loja: 'Platz',
        canal: 'Mercado Livre',
        status: PedidoStatusEnum.Integrado,
    },
    {
        pedido: '1110982538713-01',
        dataCriacao: new Date(),
        loja: 'Platz',
        canal: 'B2W',
        status: PedidoStatusEnum.Completo,
    },
    {
        pedido: '1110970446469-01',
        dataCriacao: new Date(),
        loja: 'Platz',
        canal: 'Platz',
        status: PedidoStatusEnum.Completo,
    },
    {
        pedido: '1110972454005-01',
        dataCriacao: new Date(),
        loja: 'Platz',
        canal: 'Platz',
        status: PedidoStatusEnum.Erro,
    },
    {
        pedido: '1110933482766-01',
        dataCriacao: new Date(),
        loja: 'Platz',
        canal: 'Mercado Livre',
        status: PedidoStatusEnum.Cancelado,
    }
];