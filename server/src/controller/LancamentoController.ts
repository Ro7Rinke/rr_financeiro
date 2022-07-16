import { createLancamento, deleteLancamentos } from "../dao/LancamentoDAO";
import { deleteParcelasByLancamento } from "../dao/ParcelaDAO";
import Lancamento from "../model/Lancamento";
import { generateParcelaByLancamento } from "./ParcelaController";

export const addLancamento = async (lancamento:Lancamento) => {
    
    lancamento.id = await createLancamento(lancamento)

    generateParcelaByLancamento(lancamento)
}

export const removeLancamentos = async (idsLancamento:Array<number>, idConta:number) => {
    try {
        await deleteParcelasByLancamento(idsLancamento, idConta)        

        await deleteLancamentos(idsLancamento, idConta)
    } catch (error) {
        throw error
    }
}