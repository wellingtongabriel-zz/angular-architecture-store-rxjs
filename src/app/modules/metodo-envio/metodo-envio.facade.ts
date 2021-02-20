import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { finalize, map } from "rxjs/operators";
import { MetodoEnvioItem } from "./models/metodo-envio-item.model";
import { MetodoEnvio } from "./models/metofo-envio.model";
import { MetodoEnvioService } from "./services/metodo-envio.service";
import { MetodoEnvioStore } from "./state/metodo-envio.store";
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class MetodoEnvioFacade {

    private carregandoState = new BehaviorSubject<boolean>(false); 

    constructor(
        private metodoEnvioStore: MetodoEnvioStore,
        private metodoEnvioService: MetodoEnvioService,
        private notificationService: NzNotificationService
    ) {}

    get carregando$(): Observable<boolean>{
        return this.carregandoState.asObservable();
    }

    get metodosEnvios$(): Observable<Array<MetodoEnvioItem>> {
        return this.metodoEnvioStore.metodoEnvioState$.pipe(map((state) => state.metodosEnvios));
    }

    carregaListaMetodosEnvios(): void {

        this.carregandoState.next(true);

        this.metodoEnvioService
        .obterListaMetodosEnvios()
        .pipe(finalize(() => {
            this.carregandoState.next(false)
        }))
        .subscribe((listaMetodosEnvios: Array<MetodoEnvioItem>) => this.metodoEnvioStore.adicionaListaMetodoEnvio(listaMetodosEnvios))
    }

    adicionarMetodoEnvio(metodoEnvio: MetodoEnvio): void {
        this.metodoEnvioStore.atribuiValor(metodoEnvio);
        // enviar para o servidor aqui...
        this.notificationService.success(
            'Sucesso',
            'Seu novo método de envio foi cadastrado com sucesso.',
            {
                nzStyle: {
                    background: '#F6FFED',
                    border: '1px solid #B7EB8F'
                }
            }
        );
    }
}