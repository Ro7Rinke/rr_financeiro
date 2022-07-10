import moment from "moment"
import 'moment/locale/pt'

import { sendNewEntry } from "../api/entryAPI"
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
        const entry = {
            idAccount: 1,
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

        await sendNewEntry(entry)

        let date = moment(entry.entryDate)

        for(let i = 0; i < entry.totalInstallment; i++){
            reloadInstallments(1, date.month()+1, date.year())
            date.add(1, 'month')
        }

        reloadMonthList()

        return true
    } catch (error) {
        console.log(error)
        return false
    }
}