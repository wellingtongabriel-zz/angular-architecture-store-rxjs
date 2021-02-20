import { Routes } from "@angular/router";
import { MetodoEnvioCriacaoComponent } from "./containers/metodo-envio-criacao/metodo-envio-criacao.component";
import { MetodoEnvioComponent } from "./containers/metodo-envio-lista/metodo-envio.component";

export const metodoEnvioRoutes: Routes = [
    {
        path: '',
        component: MetodoEnvioComponent
    },
    {
        path: 'metodo-envio/criacao',
        component: MetodoEnvioCriacaoComponent
    }
];