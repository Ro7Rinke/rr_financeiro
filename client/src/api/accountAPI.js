import axios from 'axios'

export const retrieveAccount = async (email, password) => {
    try {
        const response = await axios.post('/conta/login', {
            email,
            senha: password
        })               

        if(response.status = 200 && response.data){
            return {
                id: response.data.id,
                email: response.data.email,
                // password: response.data.senha,
                name: response.data.nome,
                jwt: response.data.jwt,
            }
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