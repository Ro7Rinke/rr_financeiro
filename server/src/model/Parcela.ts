
class Parcela{
    id:number
    idConta:number
    idUsuario:number
    ativo:boolean
    dataInclusao:Date
    valorParcela:number
    parcelaAtual:number
    dataParcela:Date
    idLancamento:number

    //dados do lançamento
    dataLancamento:Date
    idCategoria:number
    nome:string
    parcelaTotal:number


    constructor(){
        this.id = 0
        this.idConta = 0
        this.idUsuario = 0
        this.ativo = true
        this.dataInclusao = new Date()
        this.valorParcela = 0
        this.parcelaAtual = 0
        this.dataParcela = new Date()
        this.idLancamento = 0

        //dados do lançamento
        this.dataLancamento = new Date()
        this.idCategoria = 0
        this.nome = ''
        this.parcelaTotal = 0
    }
}

export default Parcela