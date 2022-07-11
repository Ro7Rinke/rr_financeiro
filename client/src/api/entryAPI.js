import axios from 'axios'

export const sendNewEntry = async (entry) => {
    try {
        const response = await axios.post('/lancamento/add', {
            idConta: entry.idAccount,
            idUsuario: entry.idUser,
            nome: entry.name,
            descricao: entry.description,
            ativo: entry.isActive,
            dataInclusao: new Date(),
            valorTotal: entry.totalValue,
            parcelaTotal: entry.totalInstallment,
            idCategoria: entry.idCategory,
            dataLancamento: entry.entryDate,
        })

        return response.data && response.data == 'ok'
    } catch (error) {
        throw error
    }
}

export const deleteEntries = async (idsEntry) => {
    try {
        const response = await axios.post('/lancamento/remove', {
            idsLancamento: idsEntry
        })        

        return response.data && response.data == 'ok'
    } catch (error) {
        throw error
    }
}