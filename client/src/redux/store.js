import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'

import targetValue from './reducers/targetValueReducer'
import installments from './reducers/installmentsReducer'
import monthList from './reducers/monthListReducer'
import categories from './reducers/categoriesReducer'
import idAccount from './reducers/idAccountReducer'

const rootReducer = combineReducers({
    targetValue,
    installments,
    monthList,
    categories,
    idAccount,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store