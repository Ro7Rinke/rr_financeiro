import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'

import targetValue from './reducers/targetValueReducer'
import installments from './reducers/installmentsReducer'

const rootReducer = combineReducers({
    targetValue,
    installments
})

const store = configureStore({
    reducer: rootReducer,
})

export default store