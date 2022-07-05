export const types = {
    addInstallment: 'ADD_INSTALLMENT',
    removeInstallment: 'REMOVE_INSTALLMENT',
}

export const addInstallment = data => ({
    type: types.addInstallment,
    data
})

export const removeInstallment = data => ({
    type: types.removeInstallment,
    data
})