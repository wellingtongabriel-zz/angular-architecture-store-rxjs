import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTableModule } from "ng-zorro-antd/table";
import { MetodoEnvioFiltroComponent } from "./components/metodo-envio-filtro/metodo-envio-filtro.component";
import { MetodoEnvioFormularioComponent } from "./components/metodo-envio-formulario/metodo-envio-formulario.component";
import { MetodoEnvioListagemComponent } from "./components/metodo-envio-listagem/metodo-envio-listagem.component";
import { MetodoEnvioCriacaoComponent } from "./containers/metodo-envio-criacao/metodo-envio-criacao.component";
import { MetodoEnvioComponent } from "./containers/metodo-envio-lista/metodo-envio.component";
import { MetodoEnvioFacade } from "./metodo-envio.facade";
import { metodoEnvioRoutes } from "./metodo-envio.routes";
import { MetodoEnvioService } from "./services/metodo-envio.service";
import { MetodoEnvioStore } from "./state/metodo-envio.store";
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [
    MetodoEnvioComponent,
    MetodoEnvioListagemComponent,
    MetodoEnvioFiltroComponent,
    MetodoEnvioFormularioComponent,
    MetodoEnvioCriacaoComponent,
  ],
  exports: [
    MetodoEnvioFormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzSelectModule,
    NzNotificationModule,
    RouterModule.forChild(metodoEnvioRoutes)
  ],
  providers: [
    MetodoEnvioService,
    MetodoEnvioStore,
    MetodoEnvioFacade
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MetodoEnvioModule { }
