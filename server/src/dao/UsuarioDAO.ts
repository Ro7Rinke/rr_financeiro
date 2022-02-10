import Usuario from "../model/Usuario"
import { pool } from "./Database"

const createUsuario = async (usuario:Usuario) => {
    let sql = `insert into Usuario(idConta, nome) values($1, $2)`
    let params = [
        usuario.idConta,
        usuario.nome
    ]

    const result = await pool.query(sql, params)

    return result
}

const updateUsuario = async (usuario:Usuario, idConta:number) => {
    let sql = `update Usuario nome = $1 where id = $2 and idConta = $3`
    let params = [
        usuario.nome,
        usuario.id,
        idConta
    ]

    const result = await pool.query(sql, params)

    return result
}

const readUsuarios = async (idsUsuario:Array<number>):Promise<Usuario[]> => {
    let template = ''
    for(let index = 1; index <= idsUsuario.length; index++){
        template += `$${index}`
        if(index < idsUsuario.length){
            template += ', '
        }
    }

    let sql = `select id, idConta, nome from Usuario where id in (${template})`
    let params = idsUsuario

    const result = await pool.query(sql, params)

    let usuarios:Array<Usuario> = []

    if(result.rows){
        for(const row of result.rows){
            let usuario = new Usuario()

            usuario.id = row.id
            usuario.idConta = row.idConta
            usuario.nome = row.nome
        }
    }

    return usuarios
}

const readUsuariosByConta = async (idConta:number):Promise<Usuario[]> => {
        let sql = `select id, idConta, nome from Usuario where idConta = $1`
    let params = [idConta]

    const result = await pool.query(sql, params)

    let usuarios:Array<Usuario> = []

    if(result.rows){
        for(const row of result.rows){
            let usuario = new Usuario()

            usuario.id = row.id
            usuario.idConta = row.idConta
            usuario.nome = row.nome
        }
    }

    return usuarios
}

const deleteUsuarios = async (idsUsuario:number[], idConta:number) => {
    let template = ''
    for(let index = 1; index <= idsUsuario.length; index++){
        template += `$${index+1}`
        if(index < idsUsuario.length){
            template += ', '
        }
    }

    let sql = `delete from Usuario where idConta = $1 and id in (${template})`
    let params = [idConta, ...idsUsuario]

    const result = await pool.query(sql, params)

    return result
}

export {
    createUsuario,
    updateUsuario,
    readUsuarios,
    readUsuariosByConta,
    deleteUsuarios
}