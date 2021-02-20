import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'cliente',
    loadChildren: () => import('./modules/cliente/cliente.module').then((m) => m.ClienteModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./modules/pedido/pedido.module').then((m) => m.PedidoModule)
  },
  {
    path: 'metodo-envio',
    loadChildren: () => import('./modules/metodo-envio/metodo-envio.module').then((m) => m.MetodoEnvioModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
