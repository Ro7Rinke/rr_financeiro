import Conta from "../model/Conta"
import { pool } from "./Database"

const createConta = async (conta:Conta) => {
    let sql = `insert into Conta(senha, email, nome) values($1, $2, $3)`
    let params = [
        conta.senha,
        conta.email,
        conta.nome
    ]

    const result = await pool.query(sql, params)

    return result
}

const updateConta = async (conta:Conta) => {
    let sql = `update Conta senha = $1, email = $2, nome = $3 where id = $4`
    let params = [
        conta.senha,
        conta.email,
        conta.nome,
        conta.id
    ]

    const result = await pool.query(sql, params)

    return result
}

const readContas = async (idsConta:Array<number>):Promise<Conta[]> => {
    let template = ''
    for(let index = 1; index <= idsConta.length; index++){
        template += `$${index}`
        if(index < idsConta.length){
            template += ', '
        }
    }

    let sql = `select id, senha, email, nome from Conta where id in (${template})`
    let params = idsConta

    const result = await pool.query(sql, params)

    let contas:Array<Conta> = []

    if(result.rows){
        for(const row of result.rows){
            let conta = new Conta()

            conta.id = row[`id`.toLowerCase()]
            conta.senha = row[`senha`.toLowerCase()]
            conta.email = row[`email`.toLowerCase()]
            conta.nome = row[`nome`.toLowerCase()]

            contas.push(conta)
        }
    }

    return contas
}

const readContaByEmail = async (email:string):Promise<Conta | null> => {

    let sql = `select id, senha, email, nome from Conta where email like $1`
    let params = [email]

    const result = await pool.query(sql, params)

    if(result.rows && result.rows[0]){
        let conta = new Conta()

        conta.id = result.rows[0][`id`.toLowerCase()]
        conta.senha = result.rows[0][`senha`.toLowerCase()]
        conta.email = result.rows[0][`email`.toLowerCase()]
        conta.nome = result.rows[0][`nome`.toLowerCase()]

        return conta
    }

    return null
}

const deleteContas = async (idsConta:number[]) => {
    let template = ''
    for(let index = 1; index <= idsConta.length; index++){
        template += `$${index}`
        if(index < idsConta.length){
            template += ', '
        }
    }

    let sql = `delete from Conta where id in (${template})`
    let params = idsConta

    const result = await pool.query(sql, params)

    return result
}

export {
    createConta,
    updateConta,
    readContas,
    readContaByEmail,
    deleteContas,
}