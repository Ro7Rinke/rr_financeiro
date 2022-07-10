import axios from 'axios'


export const retrieveMonthList = async (idAccount) => {
    try{
        const response = await axios.post('/month-list', {
            idConta: idAccount
        })

        return response.data
    }
    catch(error){
        console.log(error)
    }
}