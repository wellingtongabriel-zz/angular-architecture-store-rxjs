import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoStatusEnum } from '../models/enums/pedido-status.enum';
import { StatusPedidoPipe } from './statusPedido.pipe';

describe('StatusPedidoPipe', () => {
    const pipe = new StatusPedidoPipe();

    it('Deve retornar o valor do status enum correto', () => {
        const statusSucesso = PedidoStatusEnum.Completo;
        expect(pipe.transform(statusSucesso)).toBe('success');
    });

    it('Deve retornar "processing" como status padrão', () => {
        const statusPadrao = PedidoStatusEnum.Todos;
        expect(pipe.transform(statusPadrao)).toBe('processing');
    });
});

describe('Teste comportamental StatusPedidoPipe', () => {

    @Component({
        template: `
            Status: {{ statusEnum | statusPedido }}
        `
    }) 
    class TesteComportamentalComponent {
        statusEnum = PedidoStatusEnum.Erro;
    }

    let component: TesteComportamentalComponent;
    let ComponenteFixacao: ComponentFixture<TesteComportamentalComponent>;
    let elemento: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TesteComportamentalComponent,
                StatusPedidoPipe
            ]
        });

        ComponenteFixacao = TestBed.createComponent(TesteComportamentalComponent);
        component = ComponenteFixacao.componentInstance;
        elemento = ComponenteFixacao.nativeElement;
    });

    it('Deve retornar "error" como status', () => {
        ComponenteFixacao.detectChanges();
        expect(elemento.textContent).toContain('Status: error');
    });

    
    it('Deve retornar "processing" como status padrão', () => {
        component.statusEnum = PedidoStatusEnum.Todos;
        ComponenteFixacao.detectChanges();
        expect(elemento.textContent).toContain('Status: processing');
    });

});