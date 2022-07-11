import { retrieveMonthList } from "../api/otherAPI"
import { setMonthList } from "../redux/actions/monthListAction"
import store from "../redux/store"

export const reloadMonthList = async () => {
    const {idAccount} = store.getState()

    const monthList = await retrieveMonthList(idAccount)

    store.dispatch(setMonthList(monthList))
}