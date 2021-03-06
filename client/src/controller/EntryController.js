import moment, { isMoment } from "moment"
import 'moment/locale/pt'

import { deleteEntries, sendNewEntry } from "../api/entryAPI"
import { removeInstallmentsById } from "../redux/actions/installmentsAction"
import store from "../redux/store"
import { reloadMonthList } from "./HomeController"
import { reloadInstallments } from "./InstallmentController"

export const addEntry = async (
    idUser,
    name,
    description,
    totalValue,
    totalInstallment,
    idCategory,
    entryDate
) => {
    try {
        const {idAccount} = store.getState()
        const entry = {
            idAccount,
            idUser,
            name,
            description,
            isActive: true,
            dataInclusao: new Date(),
            totalValue,
            totalInstallment,
            idCategory,
            entryDate,
        }

        if(await sendNewEntry(entry)){
            let date = moment(entry.entryDate)
            // date.add(1, 'month')
            for(let i = 0; i < entry.totalInstallment; i++){
                reloadInstallments(idAccount, date.month()+1, date.year())
                date.add(1, 'month')
            }
    
            reloadMonthList()
    
            return true
        }else{
            return false
        }        
    } catch (error) {
        console.log(error)
        return false
    }
}

export const removeEntries = async (idsEntry) => {
    try {
        if(await deleteEntries(Array.isArray(idsEntry) ? idsEntry : [idsEntry])){

            const {monthList, idAccount} = store.getState()

            let date = monthList[monthList.findIndex(element => element.selected)].date
            if(!isMoment(date))
                date = moment(date)
                
            reloadMonthList()

            store.dispatch(removeInstallmentsById(idsEntry))
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}