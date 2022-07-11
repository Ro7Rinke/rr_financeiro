import axios from 'axios'

export const retrieveInstallmentsByMonth = async (idAccount, month, year) => {
    try {
        const response = await axios.post('/parcela/by-month',{
            idConta: idAccount,
            month,
            year
        })

        let installments = []

        if(response.data){
            for(let installment of response.data){
                installments.push({
                    installmentDate: installment.dataParcela,
                    categoryId: installment.idCategoria,
                    id: installment.id,
                    name: installment.nome,
                    entryDate: installment.dataLancamento,
                    valueInstallment: installment.valorParcela,
                    currentInstallment: installment.parcelaAtual,
                    totalInstallment: installment.parcelaTotal,
                    idEntry: installment.idLancamento,
                })
            }
        }
        
        return installments
        //{installmentDate: moment(), categoryId: 1, id: 1, name: 'Supermercado Big Bom', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},

    } catch (error) {
        console.log(error)
    }
}