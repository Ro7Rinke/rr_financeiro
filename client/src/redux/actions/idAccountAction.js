export const types = {
    setIdAccount: 'SET_ID_ACCOUNT',
    clearIdAccount: 'CLEAR_ID_ACCOUNT',
}

export const setIdAccount = data => ({
    type: types.setIdAccount,
    data
})

export const clearIdAccount = {
    type: types.clearIdAccount
}