export const types = {
    setAccount: 'SET_ACCOUNT',
    clearAccount: 'CLEAR_ACCOUNT',
}

export const setAccount = data => ({
    type: types.setAccount,
    data
})

export const clearCategory = {
    type: types.clearAccount
}