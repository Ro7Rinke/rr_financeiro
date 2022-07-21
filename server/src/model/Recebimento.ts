
class Recebimento{
    id:number
    idConta:number
    // idUsuario:number
    nome:string
    descricao:string
    ativo:boolean
    dataInclusao:Date
    valor:number
    dataRecebimento:Date

    constructor(){
        this.id = 0
        this.idConta = 0
        // this.idUsuario = 0
        this.nome = ''
        this.descricao = ''
        this.ativo = true
        this.dataInclusao = new Date()
        this.valor = 0
        this.dataRecebimento = new Date()
    }
}

export default Recebimento