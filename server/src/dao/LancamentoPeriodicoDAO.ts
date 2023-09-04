import LancamentoPeriodico from "../model/LancamentoPeriodico"
import { pool } from "./Database"

const createLancamentoPeriodico = async (lancamentoPeriodico:LancamentoPeriodico) => {
    let sql = `insert into LancamentoPeriodico(
        idConta, idUsuario, nome, descricao, ativo, dataInclusao, valorTotal, parcelaTotal, idCategoria, dataLancamento, idPeriodo, dataInicio, dataFim
        ) values(
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
        ) RETURNING id`
    let params = [
        lancamentoPeriodico.idConta,
        lancamentoPeriodico.idUsuario,
        lancamentoPeriodico.nome,
        lancamentoPeriodico.descricao,
        lancamentoPeriodico.ativo,
        lancamentoPeriodico.dataInclusao,
        lancamentoPeriodico.valorTotal,
        lancamentoPeriodico.parcelaTotal,
        lancamentoPeriodico.idCategoria,
        lancamentoPeriodico.dataLancamento,
        lancamentoPeriodico.idPeriodo,
        lancamentoPeriodico.dataInicio,
        lancamentoPeriodico.dataFim
    ]

    const result = await pool.query(sql, params)

    return result.rows[0].id
}

const updateLancamentoPeriodico = async (lancamentoPeriodico:LancamentoPeriodico) => {
    let sql = `update LancamentoPeriodico set idConta = $1, idUsuario = $2, nome = $3, descricao = $4, ativo = $5, dataInclusao = $6, valorTotal = $7, parcelaTotal = $8, idCategoria = $9, dataLancamento = $10 where id = $11`
    let params = [
        lancamentoPeriodico.idConta,
        lancamentoPeriodico.idUsuario,
        lancamentoPeriodico.nome,
        lancamentoPeriodico.descricao,
        lancamentoPeriodico.ativo,
        lancamentoPeriodico.dataInclusao,
        lancamentoPeriodico.valorTotal,
        lancamentoPeriodico.parcelaTotal,
        lancamentoPeriodico.idCategoria,
        lancamentoPeriodico.dataLancamento,
        lancamentoPeriodico.id
    ]

    const result = await pool.query(sql, params)

    return result
}

const readLancamentoPeriodicos = async (idsLancamentoPeriodico:Array<number>):Promise<LancamentoPeriodico[]> => {
    let template = ''
    for(let index = 1; index <= idsLancamentoPeriodico.length; index++){
        template += `$${index}`
        if(index < idsLancamentoPeriodico.length){
            template += ', '
        }
    }

    let sql = `select id, idConta, idUsuario, nome, descricao, ativo, dataInclusao, valorTotal, parcelaTotal, idCategoria, dataLancamento from LancamentoPeriodico where id in (${template})`
    let params = idsLancamentoPeriodico

    const result = await pool.query(sql, params)

    let lancamentoPeriodicos:Array<LancamentoPeriodico> = []

    if(result.rows){
        for(const row of result.rows){
            let lancamentoPeriodico = new LancamentoPeriodico()

            lancamentoPeriodico.id = row[`id`.toLowerCase()]
            lancamentoPeriodico.idConta = row[`idConta`.toLowerCase()]
            lancamentoPeriodico.idUsuario = row[`idUsuario`.toLowerCase()]
            lancamentoPeriodico.nome = row[`nome`.toLowerCase()]
            lancamentoPeriodico.descricao = row[`descricao`.toLowerCase()]
            lancamentoPeriodico.ativo = row[`ativo`.toLowerCase()]
            lancamentoPeriodico.dataInclusao = row[`dataInclusao`.toLowerCase()]
            lancamentoPeriodico.valorTotal = parseFloat(row[`valorTotal`.toLowerCase()])
            lancamentoPeriodico.parcelaTotal = row[`parcelaTotal`.toLowerCase()]
            lancamentoPeriodico.idCategoria = row[`idCategoria`.toLowerCase()]
            lancamentoPeriodico.dataLancamento = row[`dataLancamento`.toLowerCase()]

            lancamentoPeriodicos.push(lancamentoPeriodico)
        }
    }

    return lancamentoPeriodicos
}

const readLancamentoPeriodicosByConta = async (idConta:number):Promise<LancamentoPeriodico[]> => {
    let sql = `select id, idConta, idUsuario, nome, descricao, ativo, dataInclusao, valorTotal, parcelaTotal, idCategoria, dataLancamento from LancamentoPeriodico where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    let lancamentoPeriodicos:Array<LancamentoPeriodico> = []

    if(result.rows){
        for(const row of result.rows){
            let lancamentoPeriodico = new LancamentoPeriodico()

            lancamentoPeriodico.id = row[`id`.toLowerCase()]
            lancamentoPeriodico.idConta = row[`idConta`.toLowerCase()]
            lancamentoPeriodico.idUsuario = row[`idUsuario`.toLowerCase()]
            lancamentoPeriodico.nome = row[`nome`.toLowerCase()]
            lancamentoPeriodico.descricao = row[`descricao`.toLowerCase()]
            lancamentoPeriodico.ativo = row[`ativo`.toLowerCase()]
            lancamentoPeriodico.dataInclusao = row[`dataInclusao`.toLowerCase()]
            lancamentoPeriodico.valorTotal = parseFloat(row[`valorTotal`.toLowerCase()])
            lancamentoPeriodico.parcelaTotal = row[`parcelaTotal`.toLowerCase()]
            lancamentoPeriodico.idCategoria = row[`idCategoria`.toLowerCase()]
            lancamentoPeriodico.dataLancamento = row[`dataLancamento`.toLowerCase()]

            lancamentoPeriodicos.push(lancamentoPeriodico)
        }
    }

    return lancamentoPeriodicos
}

const deleteLancamentoPeriodicos = async (idsLancamentoPeriodico:number[], idConta:number) => {
    let template = ''
    for(let index = 1; index <= idsLancamentoPeriodico.length; index++){
        template += `$${index+1}`
        if(index < idsLancamentoPeriodico.length){
            template += ', '
        }
    }

    let sql = `delete from LancamentoPeriodico where idConta = $1 and id in (${template})`
    let params = [
        idConta,
        ...idsLancamentoPeriodico
    ]

    const result = await pool.query(sql, params)

    return result
}

export {
    createLancamentoPeriodico,
    updateLancamentoPeriodico,
    readLancamentoPeriodicos,
    readLancamentoPeriodicosByConta,
    deleteLancamentoPeriodicos
}