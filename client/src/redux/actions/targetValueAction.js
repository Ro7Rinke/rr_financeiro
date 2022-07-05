export const types = {
    setTargetValue: 'SET_TARGET_VALUE',
    clearTargetValue: 'CLEAR_TARGET_VALUE',
}

export const setTargetValue = data => ({
    type: types.setTargetValue,
    data
})

export const clearTargetValue = {
    type: types.clearTargetValue
}