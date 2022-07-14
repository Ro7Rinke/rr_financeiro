import { createConta, readContaByEmail } from "../dao/ContaDAO";
import Conta from "../model/Conta";

export const signup = async (conta:Conta) => {
    try {
        if(await readContaByEmail(conta.email)){
            return false
        }
        
        await createConta(conta)

        return true
    } catch (error) {
        throw error   
    }
}

export const login = async (email:string, senha:string) => {
    const conta = await readContaByEmail(email)

    if(conta && conta.senha === senha){
        return conta
    }

    return null
}