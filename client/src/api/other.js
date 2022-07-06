import axios from 'axios'


export const retrieveMonthList = async (idConta) => {
    try{
        const response = await axios.post('/month-list', {
            idConta
        })

        return response.data
    }
    catch(error){
        console.log(error)
    }
}