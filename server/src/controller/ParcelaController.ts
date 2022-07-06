import moment from 'moment'
import 'moment/locale/pt'

import currencyjs from 'currency.js'

import { createParcela } from '../dao/ParcelaDAO';

import Lancamento from "../model/Lancamento";
import Parcela from "../model/Parcela";

const calculateValueParcela = (valorTotal:number, parcelaTotal:number) => {
    const valorParcela = currencyjs(valorTotal).divide(parcelaTotal)
    const correctionValue = currencyjs(valorTotal - valorParcela.multiply(parcelaTotal).value)

    return {
        valorParcela: valorParcela.value,
        correctionValue: correctionValue.value
    }
}

export const generateParcelaByLancamento = (lancamento:Lancamento) => {

    const {valorParcela, correctionValue} = calculateValueParcela(lancamento.valorTotal, lancamento.parcelaTotal)

    const dataParcela = moment(lancamento.dataLancamento)

    for(let index = 0; index < lancamento.parcelaTotal; index++){
        let parcela:Parcela = new Parcela()

        parcela.idConta = lancamento.idConta
        parcela.idUsuario = lancamento.idUsuario
        parcela.idLancamento = lancamento.id
        parcela.parcelaAtual = index + 1
        parcela.dataInclusao = new Date()
        parcela.valorParcela = index > 0 ? valorParcela : valorParcela + correctionValue
        parcela.dataParcela = dataParcela.toDate()

        dataParcela.add(1, 'month')

        addParcela(parcela)
    }
}

export const addParcela = async (parcela:Parcela) => {
    await createParcela(parcela)
}