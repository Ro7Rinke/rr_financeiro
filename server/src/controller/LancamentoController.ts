import { createLancamento } from "../dao/LancamentoDAO";
import Lancamento from "../model/Lancamento";
import { generateParcelaByLancamento } from "./ParcelaController";

export const addLancamento = async (lancamento:Lancamento) => {
    
    await createLancamento(lancamento)

    generateParcelaByLancamento(lancamento)
}