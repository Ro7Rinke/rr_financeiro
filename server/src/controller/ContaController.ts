import { createConta, readContaByEmail } from "../dao/ContaDAO";
import Conta from "../model/Conta";
import bcrypt from 'bcrypt'

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
    let conta = await readContaByEmail(email)

    if(conta && bcrypt.compareSync(senha, conta.senha)){
        conta.senha = ''
        return conta
    }

    return null
}