import AsyncStorage from "@react-native-async-storage/async-storage"
import { retrieveMonthList } from "../api/otherAPI"
import { setMonthList } from "../redux/actions/monthListAction"
import { setTargetValue } from "../redux/actions/targetValueAction"
import store from "../redux/store"

export const reloadMonthList = async () => {
    const {idAccount} = store.getState()

    const monthList = await retrieveMonthList(idAccount)

    store.dispatch(setMonthList(monthList))
}

export const reloadTargetValue = async () => {
    const targetValue = parseInt(await AsyncStorage.getItem('targetValue'))

    if(!isNaN(targetValue)) 
        store.dispatch(setTargetValue(targetValue))
}