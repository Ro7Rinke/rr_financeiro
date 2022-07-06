import { retrieveMonthList } from "../api/other"
import { setMonthList } from "../redux/actions/monthListAction"
import store from "../redux/store"

export const reloadMonthList = async () => {
    const idConta = 1//colocar o idConta do redux

    const monthList = await retrieveMonthList(idConta)

    console.log(monthList)

    store.dispatch(setMonthList(monthList))
}