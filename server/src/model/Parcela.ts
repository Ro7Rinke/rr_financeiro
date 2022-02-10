
class Parcela{
    id:number
    ativo:boolean
    dataInclusao:Date
    valorParcela:number
    parcelaTotal:number
    dataParcela:Date
    idLancamento:number

    constructor(){
        this.id = 0
        this.ativo = true
        this.dataInclusao = new Date()
        this.valorParcela = 0
        this.parcelaTotal = 0
        this.dataParcela = new Date()
        this.idLancamento = 0
    }
}

export default Parcela