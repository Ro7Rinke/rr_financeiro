import { types } from "../actions/categoriesAction"

const initialState = [
    // {id:1, name: 'Mercado'},
    // {id:2, name: 'Alimentação'},
    // {id:3, name: 'Farmácia'},
    // {id:4, name: 'Combustível'},
    // {id:5, name: 'Outros'},
]

const categories = (state = initialState, action) => {
    switch (action.type){
        case types.setCategories:
            return action.data

        case types.clearCategories:
            return []

        default:
            return state
    }
}

export default categories