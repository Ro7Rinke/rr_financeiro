import { types } from "../actions/accountAction"

const initialState = {}

const account = (state = initialState, action) => {
    switch (action.type){
        case types.setAccount:
            return action.data

        case types.clearAccount:
            return {}

        default:
            return state
    }
}

export default account