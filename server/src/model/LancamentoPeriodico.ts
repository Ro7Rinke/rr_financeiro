import Lancamento from "./Lancamento"

class LancamentoPeriodico extends Lancamento{
    periodo:string
    dataInicio:Date

    constructor(){
        super()
        this.periodo = ''
        this.dataInicio = new Date()
    }
}

export default LancamentoPeriodico