import Categoria from "../model/Categoria"
import { pool } from "./Database"

const createCategoria = async (categoria:Categoria) => {
    let sql = `insert into Categoria(nome, descricao, ativo) values($1, $2, $3)`
    let params = [
        categoria.nome,
        categoria.descricao,
        categoria.ativo
    ]

    const result = await pool.query(sql, params)

    return result
}

const updateCategoria = async (categoria:Categoria) => {
    let sql = `update Categoria nome = $1, descricao = $2, ativo = $3 where id = $4`
    let params = [
        categoria.nome,
        categoria.descricao,
        categoria.ativo,
        categoria.id
    ]

    const result = await pool.query(sql, params)

    return result
}

const readCategorias = async (idsCategoria:Array<number>):Promise<Categoria[]> => {
    let template = ''
    for(let index = 1; index <= idsCategoria.length; index++){
        template += `$${index}`
        if(index < idsCategoria.length){
            template += ', '
        }
    }

    let sql = `select id, nome, descricao, ativo from Categoria where id in (${template})`
    let params = idsCategoria

    const result = await pool.query(sql, params)

    let categorias:Array<Categoria> = []

    if(result.rows){
        for(const row of result.rows){
            let categoria = new Categoria()

            categoria.id = row.id
            categoria.nome = row.nome
            categoria.descricao = row.descricao
            categoria.ativo = row.ativo
        }
    }

    return categorias
}

const deleteCategorias = async (idsCategoria:number[]) => {
    let template = ''
    for(let index = 1; index <= idsCategoria.length; index++){
        template += `$${index}`
        if(index < idsCategoria.length){
            template += ', '
        }
    }

    let sql = `delete from Categoria where id in (${template})`
    let params = idsCategoria

    const result = await pool.query(sql, params)

    return result
}

export {
    createCategoria,
    updateCategoria,
    readCategorias,
    deleteCategorias
}