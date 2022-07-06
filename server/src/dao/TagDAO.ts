import Tag from "../model/Tag"
import { pool } from "./Database"

const createTag = async (tag:Tag) => {
    let sql = `insert into Tag(idConta, nome) values($1, $2)`
    let params = [
        tag.idConta,
        tag.nome
    ]

    const result = await pool.query(sql, params)

    return result
}

const updateTag = async (tag:Tag, idConta:number) => {
    let sql = `update Tag nome = $1 where id = $2 and idConta = $3`
    let params = [
        tag.nome,
        tag.id,
        idConta
    ]

    const result = await pool.query(sql, params)

    return result
}

const readTags = async (idsTag:Array<number>):Promise<Tag[]> => {
    let template = ''
    for(let index = 1; index <= idsTag.length; index++){
        template += `$${index}`
        if(index < idsTag.length){
            template += ', '
        }
    }

    let sql = `select id, idConta, nome from Tag where id in (${template})`
    let params = idsTag

    const result = await pool.query(sql, params)

    let tags:Array<Tag> = []

    if(result.rows){
        for(const row of result.rows){
            let tag = new Tag()

            tag.id = row[`id`.toLowerCase()]
            tag.idConta = row[`idConta`.toLowerCase()]
            tag.nome = row[`nome`.toLowerCase()]

            tags.push(tag)
        }
    }

    return tags
}

const readTagsByConta = async (idConta:number):Promise<Tag[]> => {
        let sql = `select id, idConta, nome from Tag where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    let tags:Array<Tag> = []

    if(result.rows){
        for(const row of result.rows){
            let tag = new Tag()

            tag.id = row[`id`.toLowerCase()]
            tag.idConta = row[`idConta`.toLowerCase()]
            tag.nome = row[`nome`.toLowerCase()]

            tags.push(tag)
        }
    }

    return tags
}

const deleteTags = async (idsTag:number[], idConta:number) => {
    let template = ''
    for(let index = 1; index <= idsTag.length; index++){
        template += `$${index+1}`
        if(index < idsTag.length){
            template += ', '
        }
    }

    let sql = `delete from Tag where idConta = $1 and id in (${template})`
    let params = [idConta, ...idsTag]

    const result = await pool.query(sql, params)

    return result
}

export {
    createTag,
    updateTag,
    readTags,
    readTagsByConta,
    deleteTags
}