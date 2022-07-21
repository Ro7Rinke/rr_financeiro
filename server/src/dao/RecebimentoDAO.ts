import Recebimento from "../model/Recebimento"
import { pool } from "./Database"

const createRecebimento = async (recebimento:Recebimento) => {
    let sql = `insert into Recebimento(idConta, nome, descricao, ativo, dataInclusao, valor, dataRecebimento) values($1, $2, $3, $4, $5, $6, $7)`
    let params = [
        recebimento.idConta,
        recebimento.nome,
        recebimento.descricao,
        recebimento.ativo,
        recebimento.dataInclusao,
        recebimento.valor,
        recebimento.dataRecebimento,
    ]

    const result = await pool.query(sql, params)

    return result
}

const updateRecebimento = async (recebimento:Recebimento) => {
    let sql = `update Recebimento set nome = $1, descricao = $2, ativo = $3, dataInclusao = $4, valor = $5, dataRecebimento = $6, where id = $7 and idConta = $8`
    let params = [
        recebimento.nome,
        recebimento.descricao,
        recebimento.ativo,
        recebimento.dataInclusao,
        recebimento.valor,
        recebimento.dataRecebimento,
        recebimento.id,
        recebimento.idConta
    ]

    const result = await pool.query(sql, params)

    return result
}

const readRecebimentos = async (idsRecebimento:Array<number>):Promise<Recebimento[]> => {
    let template = ''
    for(let index = 1; index <= idsRecebimento.length; index++){
        template += `$${index}`
        if(index < idsRecebimento.length){
            template += ', '
        }
    }

    let sql = `select id, idConta, nome, descricao, ativo, dataInclusao, valor, dataRecebimento where id in (${template})`
    let params = idsRecebimento

    const result = await pool.query(sql, params)

    let recebimentos:Array<Recebimento> = []

    if(result.rows){
        for(const row of result.rows){
            let recebimento = new Recebimento()

            recebimento.id = row[`id`.toLowerCase()]
            recebimento.idConta = row[`idConta`.toLowerCase()]
            recebimento.nome = row[`nome`.toLowerCase()]
            recebimento.descricao = row[`descricao`.toLowerCase()]
            recebimento.ativo = row[`ativo`.toLowerCase()]
            recebimento.dataInclusao = row[`dataInclusao`.toLowerCase()]
            recebimento.valor = row[`valor`.toLowerCase()]
            recebimento.dataRecebimento = row[`dataRecebimento`.toLowerCase()]

            recebimentos.push(recebimento)
        }
    }

    return recebimentos
}

const readRecebimentosByConta = async (idConta:number):Promise<Recebimento[]> => {
    let sql = `select id, idConta, nome, descricao, ativo, dataInclusao, valor, dataRecebimento where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    let recebimentos:Array<Recebimento> = []

    if(result.rows){
        for(const row of result.rows){
            let recebimento = new Recebimento()

            recebimento.id = row[`id`.toLowerCase()]
            recebimento.idConta = row[`idConta`.toLowerCase()]
            recebimento.nome = row[`nome`.toLowerCase()]
            recebimento.descricao = row[`descricao`.toLowerCase()]
            recebimento.ativo = row[`ativo`.toLowerCase()]
            recebimento.dataInclusao = row[`dataInclusao`.toLowerCase()]
            recebimento.valor = row[`valor`.toLowerCase()]
            recebimento.dataRecebimento = row[`dataRecebimento`.toLowerCase()]

            recebimentos.push(recebimento)
        }
    }

    return recebimentos
}

const readRecebimentosByMonth = async (idConta:number, month:number, year:number):Promise<Recebimento[]> => {
    let sql = `select id, idConta, nome, descricao, ativo, dataInclusao, valor, dataRecebimento where idConta = $1 and EXTRACT(MONTH from dataRecebimento) = $2 and EXTRACT(YEAR from dataRecebimento) = $3`
    let params = [idConta, month, year]

    const result = await pool.query(sql, params)

    let recebimentos:Array<Recebimento> = []

    if(result.rows){
        for(const row of result.rows){
            let recebimento = new Recebimento()

            recebimento.id = row[`id`.toLowerCase()]
            recebimento.idConta = row[`idConta`.toLowerCase()]
            recebimento.nome = row[`nome`.toLowerCase()]
            recebimento.descricao = row[`descricao`.toLowerCase()]
            recebimento.ativo = row[`ativo`.toLowerCase()]
            recebimento.dataInclusao = row[`dataInclusao`.toLowerCase()]
            recebimento.valor = row[`valor`.toLowerCase()]
            recebimento.dataRecebimento = row[`dataRecebimento`.toLowerCase()]

            recebimentos.push(recebimento)
        }
    }

    return recebimentos
}

const readRecebimentoMinDate = async (idConta:number):Promise<Date> => {
    let sql = `select MIN(dataRecebimento)::Date from Recebimento where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    return result.rows[0].min
}

const readRecebimentoMaxDate = async (idConta:number):Promise<Date> => {
    let sql = `select MAX(dataRecebimento)::Date from Recebimento where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    return result.rows[0].max
}

const deleteRecebimentos = async (idsRecebimento:number[]) => {
    let template = ''
    for(let index = 1; index <= idsRecebimento.length; index++){
        template += `$${index}`
        if(index < idsRecebimento.length){
            template += ', '
        }
    }

    let sql = `delete from Recebimento where id in (${template})`
    let params = idsRecebimento

    const result = await pool.query(sql, params)

    return result
}

export {
    createRecebimento,
    updateRecebimento,
    readRecebimentos,
    readRecebimentosByConta,
    readRecebimentosByMonth,
    readRecebimentoMinDate,
    readRecebimentoMaxDate,
    deleteRecebimentos,
}