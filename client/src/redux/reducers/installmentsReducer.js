import moment from "moment"
import 'moment/locale/pt'

import { types } from "../actions/installmentsAction"

const initialState = [
    {categoryId: 1,id: 1, name: 'Supermercado Big Bom', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    {categoryId: 4,id: 2, name: 'Fernando Auto Center', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    {categoryId: 4,id: 3, name: 'Conserto Toyota Suspensão', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    {categoryId: 2,id: 4, name: 'Farmácia', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    {categoryId: 3,id: 5, name: 'Mercado', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    {categoryId: 5,id: 6, name: 'Troca correia dentada civic', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    {categoryId: 1,id: 7, name: 'Farmácia', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
]

const installments = (state = initialState, action) => {
    switch(action.type){
        case types.addInstallment:
            return [
                ...state,
                action.data
            ]

        case types.removeInstallment:
            return state.filter(installment => installment.id != action.data.id)

        default:
            return state
    }
}

export default installments