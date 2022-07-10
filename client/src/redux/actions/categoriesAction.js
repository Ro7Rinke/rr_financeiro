export const types = {
    setCategories: 'SET_CATEGORIES',
    clearCategories: 'CLEAR_CATEGORIES',
}

export const setCategories = data => ({
    type: types.setCategories,
    data
})

export const clearCategory = {
    type: types.clearCategories
}