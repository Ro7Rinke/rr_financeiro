import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'

import targetValue from './reducers/targetValueReducer'
import installments from './reducers/installmentsReducer'
import monthList from './reducers/monthListReducer'
import categories from './reducers/categoriesReducer'

const rootReducer = combineReducers({
    targetValue,
    installments,
    monthList,
    categories,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store