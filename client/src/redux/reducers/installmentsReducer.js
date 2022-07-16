import moment from "moment"
import 'moment/locale/pt'
import { getReferenceDate } from "../../common"

import { types } from "../actions/installmentsAction"

const initialState = {
    // '07/2022': [
    //     {installmentDate: moment(), categoryId: 1, id: 1, name: 'Supermercado Big Bom', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    //     {installmentDate: moment(), categoryId: 4, id: 2, name: 'Fernando Auto Center', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    //     {installmentDate: moment(), categoryId: 4, id: 3, name: 'Conserto Toyota Suspensão', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    //     {installmentDate: moment(), categoryId: 2, id: 4, name: 'Farmácia', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    //     {installmentDate: moment(), categoryId: 3, id: 5, name: 'Mercado', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    //     {installmentDate: moment(), categoryId: 5, id: 6, name: 'Troca correia dentada civic', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    //     {installmentDate: moment(), categoryId: 1, id: 7, name: 'Farmácia', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    // ],
    // '09/2022': [
    //     {installmentDate: new moment('01/09/2022', 'DD/MM/YYYY'), categoryId: 3, id: 15, name: 'Mercado', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    //     {installmentDate: new moment('01/09/2022', 'DD/MM/YYYY'), categoryId: 5, id: 16, name: 'Troca correia dentada civic', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    //     {installmentDate: new moment('01/09/2022', 'DD/MM/YYYY'), categoryId: 1, id: 17, name: 'Farmácia', entryDate: moment(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
    // ]
}

const installments = (state = initialState, action) => {
    switch(action.type){
        case types.setInstallmentsByMonth:
            return setInstallmentsByMonth(state, action)

        case types.addInstallments:
            return addInstallments(state, action)

        case types.addInstallment:
            return addInstallment(state, action)

        case types.removeInstallment:
            return removeInstallment(state, action)

        case types.removeInstallmentsById:
            return removeInstallmentsById(state, action)

        default:
            return state
    }
}

const setInstallmentsByMonth = (state, action) => {
    let newState = {...state}

    newState[`${action.data.referenceDate}`] = action.data.installments.sort((a, b) => a.entryDate > b.entryDate)

    return newState
}

const addInstallments = (state, action) => {
    let newState = {...state}
    
    for(const installment of action.data) {
        newState = addInstallment(newState, {type: types.addInstallment, data: installment})
    }

    return newState
}

const addInstallment = (state, action) => {
    let newState = {...state}

    const referenceDate = getReferenceDate(action.data.installmentDate)

    if(!state[referenceDate])
        newState[referenceDate] = []
    else
        newState = removeInstallment(state, action)

    newState[referenceDate] = [...newState[referenceDate], action.data].sort((a, b) => a.entryDate > b.entryDate)

    return newState
}

const removeInstallment = (state, action) => {
    let newState = {...state}

    const referenceDate = getReferenceDate(action.data.installmentDate)

    if(!newState[referenceDate])
        return newState

    newState[referenceDate] = newState[referenceDate].filter(element => element.id != action.data.id)

    return newState
}

const removeInstallmentsById = (state, action) => {
    let newState = {...state}
    
    for(const referenceDate in newState){
        newState[referenceDate] = newState[referenceDate].filter(installment => !action.data.includes(installment.idEntry))
    }

    return newState
}

export default installments