import { retrieveAccount, sendNewAccount } from "../api/accountAPI"
import { setAccount } from "../redux/actions/accountAction"
import { setIdAccount } from "../redux/actions/idAccountAction"
import store from "../redux/store"

export const loginByEmail = async (email, password) => {
    try {
        const account = await retrieveAccount(email, password)
        
        if(account){
            store.dispatch(setIdAccount(account.id))
            store.dispatch(setAccount(account))

            console.log(account.jwt)

            return true
        }

        return false
    } catch (error) {
        return false
    }
}

export const signup = async (email, password, name) => {
    try {
        return await sendNewAccount(email, password, name)
    } catch (error) {
        return false
    }
}