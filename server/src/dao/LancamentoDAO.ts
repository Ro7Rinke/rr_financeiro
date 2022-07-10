import Lancamento from "../model/Lancamento"
import { pool } from "./Database"

const createLancamento = async (lancamento:Lancamento) => {
    let sql = `insert into Lancamento(idConta, idUsuario, nome, descricao, ativo, dataInclusao, valorTotal, parcelaTotal, idCategoria, dataLancamento, idLancamentoPeriodico) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`
    let params = [
        lancamento.idConta,
        lancamento.idUsuario,
        lancamento.nome,
        lancamento.descricao,
        lancamento.ativo,
        lancamento.dataInclusao,
        lancamento.valorTotal,
        lancamento.parcelaTotal,
        lancamento.idCategoria,
        lancamento.dataLancamento,
        lancamento.idLancamentoPeriodico,
    ]

    const result = await pool.query(sql, params)

    return result
}

const updateLancamento = async (lancamento:Lancamento) => {
    let sql = `update Lancamento idConta = $1, idUsuario = $2, nome = $3, descricao = $4, ativo = $5, dataInclusao = $6, valorTotal = $7, parcelaTotal = $8, idCategoria = $9, dataLancamento = $10, idLancamentoPeriodico = $11 where id = $12`
    let params = [
        lancamento.idConta,
        lancamento.idUsuario,
        lancamento.nome,
        lancamento.descricao,
        lancamento.ativo,
        lancamento.dataInclusao,
        lancamento.valorTotal,
        lancamento.parcelaTotal,
        lancamento.idCategoria,
        lancamento.dataLancamento,
        lancamento.idLancamentoPeriodico,
        lancamento.id
    ]

    const result = await pool.query(sql, params)

    return result
}

const readLancamentos = async (idsLancamento:Array<number>):Promise<Lancamento[]> => {
    let template = ''
    for(let index = 1; index <= idsLancamento.length; index++){
        template += `$${index}`
        if(index < idsLancamento.length){
            template += ', '
        }
    }

    let sql = `select id, idConta, idUsuario, nome, descricao, ativo, dataInclusao, valorTotal, parcelaTotal, idCategoria, dataLancamento, idLancamentoPeriodico from Lancamento where id in (${template})`
    let params = idsLancamento

    const result = await pool.query(sql, params)

    let lancamentos:Array<Lancamento> = []

    if(result.rows){
        for(const row of result.rows){
            let lancamento = new Lancamento()

            lancamento.id = row[`id`.toLowerCase()]
            lancamento.idConta = row[`idConta`.toLowerCase()]
            lancamento.idUsuario = row[`idUsuario`.toLowerCase()]
            lancamento.nome = row[`nome`.toLowerCase()]
            lancamento.descricao = row[`descricao`.toLowerCase()]
            lancamento.ativo = row[`ativo`.toLowerCase()]
            lancamento.dataInclusao = row[`dataInclusao`.toLowerCase()]
            lancamento.valorTotal = parseFloat(row[`valorTotal`.toLowerCase()])
            lancamento.parcelaTotal = row[`parcelaTotal`.toLowerCase()]
            lancamento.idCategoria = row[`idCategoria`.toLowerCase()]
            lancamento.dataLancamento = row[`dataLancamento`.toLowerCase()]
            lancamento.idLancamentoPeriodico = row[`idLancamentoPeriodico`.toLowerCase()]

            lancamentos.push(lancamento)
        }
    }

    return lancamentos
}

const readLancamentosByConta = async (idConta:number):Promise<Lancamento[]> => {
    let sql = `select id, idConta, idUsuario, nome, descricao, ativo, dataInclusao, valorTotal, parcelaTotal, idCategoria, dataLancamento, idLancamentoPeriodico from Lancamento where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    let lancamentos:Array<Lancamento> = []

    if(result.rows){
        for(const row of result.rows){
            let lancamento = new Lancamento()

            lancamento.id = row[`id`.toLowerCase()]
            lancamento.idConta = row[`idConta`.toLowerCase()]
            lancamento.idUsuario = row[`idUsuario`.toLowerCase()]
            lancamento.nome = row[`nome`.toLowerCase()]
            lancamento.descricao = row[`descricao`.toLowerCase()]
            lancamento.ativo = row[`ativo`.toLowerCase()]
            lancamento.dataInclusao = row[`dataInclusao`.toLowerCase()]
            lancamento.valorTotal = parseFloat(row[`valorTotal`.toLowerCase()])
            lancamento.parcelaTotal = row[`parcelaTotal`.toLowerCase()]
            lancamento.idCategoria = row[`idCategoria`.toLowerCase()]
            lancamento.dataLancamento = row[`dataLancamento`.toLowerCase()]
            lancamento.idLancamentoPeriodico = row[`idLancamentoPeriodico`.toLowerCase()]

            lancamentos.push(lancamento)
        }
    }

    return lancamentos
}

const deleteLancamentos = async (idsLancamento:number[]) => {
    let template = ''
    for(let index = 1; index <= idsLancamento.length; index++){
        template += `$${index}`
        if(index < idsLancamento.length){
            template += ', '
        }
    }

    let sql = `delete from Lancamento where id in (${template})`
    let params = idsLancamento

    const result = await pool.query(sql, params)

    return result
}

export {
    createLancamento,
    updateLancamento,
    readLancamentos,
    readLancamentosByConta,
    deleteLancamentos
}