import { createConta, readContaByEmail, readContas } from "../dao/ContaDAO";
import Conta from "../model/Conta";
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { jwtExpiration } from "../config/config";

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
        conta.jwt = generateJwt(conta.id)

        return conta
    }

    return null
}

export const loginByJwt = async (jwt:string) => {
    const {idConta} = <any>verifyJwt(jwt)

    try {
        const contas = await readContas([idConta])
        if(contas.length > 0){
            let conta:Conta = {...contas[0], senha: ''}
            conta.jwt = generateJwt(conta.id)
            return conta
        }else return null
    } catch (error) {
        throw error
    }
}

export const generateJwt = (idConta:number) => {
    try {
        return jsonwebtoken.sign({idConta }, <string>process.env.JWT_SECRET, {expiresIn: jwtExpiration})
    } catch (error) {
        throw error
    }
}   

export const verifyJwt = (jwt:string) => {
    try {
        return jsonwebtoken.verify(jwt, <string>process.env.JWT_SECRET)
    } catch (error) {
        throw error
    }
}