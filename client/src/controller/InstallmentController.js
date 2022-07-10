import { retrieveInstallmentsByMonth } from "../api/installmentAPI"
import { addInstallments } from "../redux/actions/installmentsAction"
import store from "../redux/store"

export const reloadInstallments = async (idAccount, month, year) => {

    const installments = await retrieveInstallmentsByMonth(idAccount, month, year)
    
    store.dispatch(addInstallments(installments))
}