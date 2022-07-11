import { retrieveInstallmentsByMonth } from "../api/installmentAPI"
import { getReferenceDateByMonthYear } from "../common"
import { addInstallments, setInstallmentsByMonth } from "../redux/actions/installmentsAction"
import store from "../redux/store"

export const reloadInstallments = async (idAccount, month, year) => {

    const installments = await retrieveInstallmentsByMonth(idAccount, month, year)
    
    store.dispatch(setInstallmentsByMonth({
        referenceDate: getReferenceDateByMonthYear(month, year),
        installments
    }))
}