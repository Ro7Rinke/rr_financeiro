import { getCategories } from "../api/categoryAPI"
import { setCategories } from "../redux/actions/categoriesAction"
import store from "../redux/store"

export const reloadCategories = async () => {
    try {
        const categories = await getCategories()

        store.dispatch(setCategories(categories))
    } catch (error) {
        console.log(error)
    }
}