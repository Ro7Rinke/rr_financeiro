import { types } from "../actions/idAccountAction"

const initialState = 0

const idAccount = (state = initialState, action) => {
    switch (action.type){
        case types.setIdAccount:
            return action.data

        case types.clearIdAccount:
            return 0

        default:
            return state
    }
}

export default idAccount