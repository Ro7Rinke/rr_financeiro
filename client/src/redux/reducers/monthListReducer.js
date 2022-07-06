import { types } from "../actions/monthListAction"

import moment from "moment"

const initialState = [ {id: 1, date: Date.now(), selected: true} ]

const monthList = (state = initialState, action) => {
    switch(action.type){
        case types.setMonthList:
            return action.data        

        default:
            return state
    }
}

export default monthList