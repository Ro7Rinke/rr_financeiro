import Parcela from "./Parcela"
import Tag from "./Tag"

class Lancamento {
    id:number
    idConta:number
    idUsuario:number
    nome:string
    descricao:string
    ativo:boolean
    dataInclusao:Date
    valorTotal:number
    parcelaTotal:number
    idCategoria:number
    dataLancamento:Date
    idLancamentoPeriodico?:number
    parcelas:Array<Parcela>
    tags:Array<Tag>

    constructor(){
        this.id = 0
        this.idConta = 0
        this.idUsuario = 0
        this.nome = ''
        this.descricao = ''
        this.ativo = true
        this.dataInclusao = new Date()
        this.valorTotal = 0
        this.parcelaTotal = 0
        this.idCategoria = 0
        this.dataLancamento = new Date()
        this.parcelas = []
        this.tags = []
    }
}

export default Lancamento