export const types = {
    setInstallmentsByMonth: 'SET_INSTALLMENTS_BY_MONTH',
    addInstallments: 'ADD_INSTALLMENTS',
    addInstallment: 'ADD_INSTALLMENT',
    removeInstallment: 'REMOVE_INSTALLMENT',
}

export const setInstallmentsByMonth = data => ({
    type: types.setInstallmentsByMonth,
    data
})

export const addInstallments = data => ({
    type: types.addInstallments,
    data: Array.isArray(data) ? data : [data]
})

export const addInstallment = data => ({
    type: types.addInstallment,
    data
})

export const removeInstallment = data => ({
    type: types.removeInstallment,
    data
})