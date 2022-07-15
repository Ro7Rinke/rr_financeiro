import { retrieveAccountByEmail, retrieveAccountByJwt, sendNewAccount } from "../api/accountAPI"
import { setAccount } from "../redux/actions/accountAction"
import { setIdAccount } from "../redux/actions/idAccountAction"
import store from "../redux/store"
import AsyncStorage from '@react-native-async-storage/async-storage'

const login = (account) => {
    store.dispatch(setIdAccount(account.id))
    store.dispatch(setAccount(account))

    AsyncStorage.setItem('jwt', account.jwt)
}

export const loginByEmail = async (email, password) => {
    try {
        const account = await retrieveAccountByEmail(email, password)
        
        if(account){
            login(account)

            return true
        }

        return false
    } catch (error) {
        return false
    }
}

export const loginByJwt = async () => {
    try{
        const jwt = await AsyncStorage.getItem('jwt')

        if(!jwt)
            return false

        const account = await retrieveAccountByJwt(jwt)

        if(account){
            login(account)

            return true
        }else{
            return false
        }
    }catch(error){
        throw error
    }
}

export const signup = async (email, password, name) => {
    try {
        return await sendNewAccount(email, password, name)
    } catch (error) {
        return false
    }
}