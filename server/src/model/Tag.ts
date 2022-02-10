
class Tag{
    id:number
    idCategoria:number
    nome:string
    descricao:string
    ativo:boolean

    constructor(){
        this.id = 0
        this.idCategoria = 0
        this.nome = ''
        this.descricao = ''
        this.ativo = true
    }
}

export default Tag