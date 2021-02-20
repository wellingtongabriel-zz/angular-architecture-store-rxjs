import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { PedidoFiltroComponent } from "./components/pedido-filtro/pedido-filtro.component";
import { PedidoListagemComponent } from "./components/pedido-listagem/pedido-listagem.component";
import { PedidoComponent } from "./containers/pedido.component";
import { PedidoFacade } from "./pedido.facade";
import { pedidoRoutes } from "./pedido.routes";
import { StatusPedidoPipe } from "./pipes/statusPedido.pipe";
import { ClienteService } from "./services/pedido.service";
import { PedidoStore } from "./state/pedido.store";

@NgModule({
    declarations: [
        PedidoComponent,
        PedidoListagemComponent,
        StatusPedidoPipe,
        PedidoFiltroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NzTableModule,
        NzTagModule,
        NzDatePickerModule,
        NzGridModule,
        NzInputModule,
        NzFormModule,
        NzSelectModule,
        NzButtonModule,
        NzIconModule,
        RouterModule.forChild(pedidoRoutes)
    ],
    providers: [
        PedidoStore,
        PedidoFacade,
        ClienteService
    ]
})
export class PedidoModule {}