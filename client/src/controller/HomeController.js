import { retrieveMonthList } from "../api/otherAPI"
import { setMonthList } from "../redux/actions/monthListAction"
import store from "../redux/store"

export const reloadMonthList = async () => {
    const idConta = 1//colocar o idConta do redux

    const monthList = await retrieveMonthList(idConta)

    store.dispatch(setMonthList(monthList))
}