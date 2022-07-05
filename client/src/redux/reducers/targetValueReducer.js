import { types } from "../actions/targetValueAction"

const initialState = 10000

const targetValue = (state = initialState, action) => {
    switch (action.type){
        case types.setTargetValue:
            return action.data

        case types.clearTargetValue:
            return 0

        default:
            return state
    }
}

export default targetValue