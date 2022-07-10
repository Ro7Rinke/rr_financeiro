import Parcela from "../model/Parcela"
import { pool } from "./Database"

const createParcela = async (parcela:Parcela) => {
    let sql = `insert into Parcela(idConta, idUsuario, idLancamento, dataParcela, parcelaAtual, valorParcela, dataInclusao, ativo) values($1, $2, $3, $4, $5, $6, $7, $8)`
    let params = [
        parcela.idConta,
        parcela.idUsuario,
        parcela.idLancamento,
        parcela.dataParcela,
        parcela.parcelaAtual,
        parcela.valorParcela,
        parcela.dataInclusao,
        parcela.ativo,
    ]

    const result = await pool.query(sql, params)

    return result
}

const updateParcela = async (parcela:Parcela) => {
    let sql = `update Parcela idConta = $1, idUsuario = $2, idLancamento = $3, dataParcela = $4, parcelaAtual = $5, valorParcela = $6, dataInclusao = $7, ativo = $8 where id = $9`
    let params = [
        parcela.idConta,
        parcela.idUsuario,
        parcela.idLancamento,
        parcela.dataParcela,
        parcela.parcelaAtual,
        parcela.valorParcela,
        parcela.dataInclusao,
        parcela.ativo,
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

            parcela.id = row[`id`.toLowerCase()]
            parcela.idConta = row[`idConta`.toLowerCase()]
            parcela.idUsuario = row[`idUsuario`.toLowerCase()]
            parcela.idLancamento = row[`idLancamento`.toLowerCase()]
            parcela.dataParcela = row[`dataParcela`.toLowerCase()]
            parcela.parcelaAtual = row[`parcelaAtual`.toLowerCase()]
            parcela.valorParcela = row[`valorParcela`.toLowerCase()]
            parcela.dataInclusao = row[`dataInclusao`.toLowerCase()]
            parcela.ativo = row[`ativo`.toLowerCase()]

            parcelas.push(parcela)
        }
    }

    return parcelas
}

const readParcelasByConta = async (idConta:number):Promise<Parcela[]> => {
    let sql = `select id, idConta, idUsuario, idLancamento, dataParcela, parcelaAtual, valorParcela, dataInclusao, ativo from Parcela where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    let parcelas:Array<Parcela> = []

    if(result.rows){
        for(const row of result.rows){
            let parcela = new Parcela()

            parcela.id = row[`id`.toLowerCase()]
            parcela.idConta = row[`idConta`.toLowerCase()]
            parcela.idUsuario = row[`idUsuario`.toLowerCase()]
            parcela.idLancamento = row[`idLancamento`.toLowerCase()]
            parcela.dataParcela = row[`dataParcela`.toLowerCase()]
            parcela.parcelaAtual = row[`parcelaAtual`.toLowerCase()]
            parcela.valorParcela = row[`valorParcela`.toLowerCase()]
            parcela.dataInclusao = row[`dataInclusao`.toLowerCase()]
            parcela.ativo = row[`ativo`.toLowerCase()]

            parcelas.push(parcela)
        }
    }

    return parcelas
}

const readParcelasByMonth = async (idConta:number, month:number, year:number):Promise<Parcela[]> => {
    let sql = `select 
    p.id, p.idConta, p.idUsuario, p.idLancamento, p.dataParcela, p.parcelaAtual, p.valorParcela, p.dataInclusao, p.ativo, 
    l.dataLancamento, l.idCategoria, l.nome, l.parcelaTotal
    from Parcela p
    inner join Lancamento l on l.id = p.idLancamento
    where p.idConta = $1 
    and EXTRACT(MONTH from p.dataParcela) = $2 
    and EXTRACT(YEAR from p.dataParcela) = $3`
    let params = [idConta, month, year]

    const result = await pool.query(sql, params)

    let parcelas:Array<Parcela> = []

    if(result.rows){
        for(const row of result.rows){
            let parcela = new Parcela()

            parcela.id = row[`id`.toLowerCase()]
            parcela.idConta = row[`idConta`.toLowerCase()]
            parcela.idUsuario = row[`idUsuario`.toLowerCase()]
            parcela.idLancamento = row[`idLancamento`.toLowerCase()]
            parcela.dataParcela = row[`dataParcela`.toLowerCase()]
            parcela.parcelaAtual = row[`parcelaAtual`.toLowerCase()]
            parcela.valorParcela = row[`valorParcela`.toLowerCase()]
            parcela.dataInclusao = row[`dataInclusao`.toLowerCase()]
            parcela.ativo = row[`ativo`.toLowerCase()]
            parcela.dataLancamento = row[`dataLancamento`.toLowerCase()]
            parcela.idCategoria = row[`idCategoria`.toLowerCase()]
            parcela.nome = row[`nome`.toLowerCase()]
            parcela.parcelaTotal = row[`parcelaTotal`.toLowerCase()]

            parcelas.push(parcela)
        }
    }

    return parcelas
}

const readParcelasByLancamento = async (idLancamento:number):Promise<Parcela[]> => {
    let sql = `select id, idConta, idUsuario, idLancamento, dataParcela, parcelaAtual, valorParcela, dataInclusao, ativo from Parcela where idLancamento = $1`
    let params = [idLancamento]

    const result = await pool.query(sql, params)

    let parcelas:Array<Parcela> = []

    if(result.rows){
        for(const row of result.rows){
            let parcela = new Parcela()

            parcela.id = row[`id`.toLowerCase()]
            parcela.idConta = row[`idConta`.toLowerCase()]
            parcela.idUsuario = row[`idUsuario`.toLowerCase()]
            parcela.idLancamento = row[`idLancamento`.toLowerCase()]
            parcela.dataParcela = row[`dataParcela`.toLowerCase()]
            parcela.parcelaAtual = row[`parcelaAtual`.toLowerCase()]
            parcela.valorParcela = row[`valorParcela`.toLowerCase()]
            parcela.dataInclusao = row[`dataInclusao`.toLowerCase()]
            parcela.ativo = row[`ativo`.toLowerCase()]

            parcelas.push(parcela)
        }
    }

    return parcelas
}

const readParcelaMinDate = async (idConta:number):Promise<Date> => {
    let sql = `select MIN(dataParcela)::Date from Parcela where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    return result.rows[0].min
}

const readParcelaMaxDate = async (idConta:number):Promise<Date> => {
    let sql = `select MAX(dataParcela)::Date from Parcela where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    return result.rows[0].max
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
    readParcelasByMonth,
    readParcelasByLancamento,
    readParcelaMinDate,
    readParcelaMaxDate,
    deleteParcelas,
    deleteParcelasByLancamento,
}