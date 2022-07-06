import bodyParser from 'body-parser'
import express, {Request, Response, Application, Router} from 'express'
import logger from './controller/logger'
import { addParcela, generateParcelaByLancamento } from './controller/ParcelaController'
import { readLancamentos, readLancamentosByConta } from './dao/LancamentoDAO'
import { readParcelaMinDate, readParcelasByMonth } from './dao/ParcelaDAO'
import Lancamento from './model/Lancamento'
import Parcela from './model/Parcela'

const app:Application = express()
const router:Router = express.Router()

const PORT = 8001 //process.env.PORT || 8001

app.get("/", (req:Request, res:Response):void => {
    res.send("It's WORKING!!")
})



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/", router)

app.listen(PORT, ():void => {
    logger.info(`Server Running on PORT:${PORT}`)
})

let parcela:Parcela = new Parcela()

parcela.idConta = 1
parcela.idUsuario = 1
parcela.idLancamento = 1
parcela.valorParcela = 200



const run = async () => {
    // let lancamentos:Array<Lancamento> = await readLancamentosByConta(1)

    // if(lancamentos.length > 0){
    //     generateParcelaByLancamento(lancamentos[0])
    // }else{
    //     console.log('deu ruim')
    // }

    // let data:Date = await readParcelaMinDate(1)

}

run()
