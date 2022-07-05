import Parcela from "../model/Parcela"
import { pool } from "./Database"

const createParcela = async (parcela:Parcela) => {
    let sql = `insert into Parcela(idConta, idUsuario, idLancamento, dataParcela, parcelaAtual, valorParcela, dataInclusao, ativo) values($1, $2, $3, $4, $5, $6, $7, $8)`
    let params = [
        parcela.idConta,
        parcela.idUsuario,
        parcela.ativo,
        parcela.dataInclusao,
        parcela.valorParcela,
        parcela.parcelaAtual,
        parcela.dataParcela,
        parcela.idLancamento,
    ]

    const result = await pool.query(sql, params)

    return result
}

const updateParcela = async (parcela:Parcela) => {
    let sql = `update Parcela idConta = $1, idUsuario = $2, idLancamento = $3, dataParcela = $4, parcelaAtual = $5, valorParcela = $6, dataInclusao = $7, ativo = $8 where id = $9`
    let params = [
        parcela.idConta,
        parcela.idUsuario,
        parcela.ativo,
        parcela.dataInclusao,
        parcela.valorParcela,
        parcela.parcelaAtual,
        parcela.dataParcela,
        parcela.idLancamento,
        parcela.id
    ]

    const result = await pool.query(sql, params)

    return result
}

const readParcelas = async (idsParcela:Array<number>):Promise<Parcela[]> => {
    let template = ''
    for(let index = 1; index <= idsParcela.length; index++){
        template += `$${index}`
        if(index < idsParcela.length){
            template += ', '
        }
    }

    let sql = `select id, idConta, idUsuario, idLancamento, dataParcela, parcelaAtual, valorParcela, dataInclusao, ativo from Parcela where id in (${template})`
    let params = idsParcela

    const result = await pool.query(sql, params)

    let parcelas:Array<Parcela> = []

    if(result.rows){
        for(const row of result.rows){
            let parcela = new Parcela()

            parcela.id = row.id
            parcela.idConta = row.idConta
            parcela.idUsuario = row.idUsuario
            parcela.ativo = row.ativo
            parcela.dataInclusao = row.dataInclusao
            parcela.valorParcela = row.valorParcela
            parcela.parcelaAtual = row.parcelaAtual
            parcela.dataParcela = row.dataParcela
            parcela.idLancamento = row.idLancamento
        }
    }

    return parcelas
}

const readParcelasByConta = async (idConta:number):Promise<Parcela[]> => {
    let sql = `select idConta, idUsuario, idLancamento, dataParcela, parcelaAtual, valorParcela, dataInclusao, ativo from Parcela where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    let parcelas:Array<Parcela> = []

    if(result.rows){
        for(const row of result.rows){
            let parcela = new Parcela()

            parcela.id = row.id
            parcela.idConta = row.idConta
            parcela.idUsuario = row.idUsuario
            parcela.ativo = row.ativo
            parcela.dataInclusao = row.dataInclusao
            parcela.valorParcela = row.valorParcela
            parcela.parcelaAtual = row.parcelaAtual
            parcela.dataParcela = row.dataParcela
            parcela.idLancamento = row.idLancamento
        }
    }

    return parcelas
}

const readParcelasByLancamento = async (idLancamento:number):Promise<Parcela[]> => {
    let sql = `select idConta, idUsuario, idLancamento, dataParcela, parcelaAtual, valorParcela, dataInclusao, ativo from Parcela where idLancamento = $1`
    let params = [idLancamento]

    const result = await pool.query(sql, params)

    let parcelas:Array<Parcela> = []

    if(result.rows){
        for(const row of result.rows){
            let parcela = new Parcela()

            parcela.id = row.id
            parcela.idConta = row.idConta
            parcela.idUsuario = row.idUsuario
            parcela.ativo = row.ativo
            parcela.dataInclusao = row.dataInclusao
            parcela.valorParcela = row.valorParcela
            parcela.parcelaAtual = row.parcelaAtual
            parcela.dataParcela = row.dataParcela
            parcela.idLancamento = row.idLancamento
        }
    }

    return parcelas
}

const deleteParcelas = async (idsParcela:number[]) => {
    let template = ''
    for(let index = 1; index <= idsParcela.length; index++){
        template += `$${index}`
        if(index < idsParcela.length){
            template += ', '
        }
    }

    let sql = `delete from Parcela where id in (${template})`
    let params = idsParcela

    const result = await pool.query(sql, params)

    return result
}

const deleteParcelasByLancamento = async (idslancamento:number[]) => {
    let template = ''
    for(let index = 1; index <= idslancamento.length; index++){
        template += `$${index}`
        if(index < idslancamento.length){
            template += ', '
        }
    }

    let sql = `delete from Parcela where idLancamento in (${template})`
    let params = idslancamento

    const result = await pool.query(sql, params)

    return result
}

export {
    createParcela,
    updateParcela,
    readParcelas,
    readParcelasByConta,
    readParcelasByLancamento,
    deleteParcelas,
    deleteParcelasByLancamento,
}