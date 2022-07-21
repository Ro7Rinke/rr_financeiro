import { createRecebimento } from "../dao/RecebimentoDAO";
import Recebimento from "../model/Recebimento";

export const addRecebimento = async (recebimento:Recebimento) => {
    try {
        await createRecebimento(recebimento)        
    } catch (error) {
        throw error
    }
}