import { MetodoEnvioItem } from "../models/metodo-envio-item.model";
import { MetodoEnvio } from "../models/metofo-envio.model";

export interface MetodoEnvioState {
    metodosEnvios: Array<MetodoEnvioItem>;
    metodoEnvioFormulario: MetodoEnvio;
}