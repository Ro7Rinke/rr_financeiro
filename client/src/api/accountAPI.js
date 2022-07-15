import axios from 'axios'

const retrieveAccount = async (data) => {
    return {
        id: data.id,
        email: data.email,
        // password: data.senha,
        name: data.nome,
        jwt: data.jwt,
    }
}

export const retrieveAccountByEmail = async (email, password) => {
    try {
        const response = await axios.post('/conta/login', {
            email,
            senha: password
        })               

        if(response.status = 200 && response.data){
            return retrieveAccount(response.data)
        }

        return null
    } catch (error) {
        throw error
    }
}

export const retrieveAccountByJwt = async (jwt) => {
    try {
        const response = await axios.post('/conta/login-jwt', { jwt })               

        if(response.status = 200 && response.data){
            return retrieveAccount(response.data)
        }

        return null
    } catch (error) {
        throw error
    }
}

export const sendNewAccount = async (email, password, name) => {
    try {
        const response = await axios.post('/conta/signup', {
            email,
            senha: password,
            nome: name
        })        

        return response.status == 200 && response.data && response.data == 'ok'

    } catch (error) {
        throw error
    }
}