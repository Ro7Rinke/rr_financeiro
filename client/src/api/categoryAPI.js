import axios from 'axios'

export const getCategories = async () => {
    try {
        let categories = []

        const response = await axios.get('/categoria/all')

        if(response.data){
            for(const category of response.data){
                categories.push({
                    id: category.id,
                    name: category.nome,
                    description: category.descricao,
                    isActive: category.ativo,
                })
            }
        }

        return categories
    } catch (error) {
        console.log(error)
    }
}