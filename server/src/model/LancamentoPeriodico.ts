import Lancamento from "./Lancamento"
import Periodo from "./Periodo"

class LancamentoPeriodico extends Lancamento{
    idPeriodo:number
    dataInicio:Date
    dataFim:Date
    periodo:Periodo

    constructor(){
        super()
        this.idPeriodo = 0
        this.dataInicio = new Date()
        this.dataFim = new Date()
        this.periodo = new Periodo()
    }
}

export default LancamentoPeriodico