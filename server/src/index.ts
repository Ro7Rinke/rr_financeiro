import bodyParser from 'body-parser'
import express, {Request, Response, Application, Router} from 'express'
import { isDebug } from './controller/args'
import { login, signup } from './controller/ContaController'
import { addLancamento, removeLancamentos } from './controller/LancamentoController'
import logger from './controller/logger'
import { getMonthList } from './controller/ParcelaController'
import { readAllCategorias, readCategorias } from './dao/CategoriaDAO'
import { readLancamentos, readLancamentosByConta } from './dao/LancamentoDAO'
import { readParcelaMinDate, readParcelasByMonth } from './dao/ParcelaDAO'
import Lancamento from './model/Lancamento'
import Parcela from './model/Parcela'
import MonthType from './type/MonthType'

const app:Application = express()
const router:Router = express.Router()

const PORT = isDebug() ? 8001 : 8002 //process.env.PORT || 8001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/", router)

app.get("/", (req:Request, res:Response):void => {
    res.send("It's WORKING!!")
})

app.post('/month-list', async (req:Request, res:Response):Promise<void> => {
    if(req.body){
        const montList:Array<MonthType> = await getMonthList(req.body.idConta) 
        res.send(montList)
    }
})

app.post('/conta/signup', async (req:Request, res:Response) => {
    try{
        if(req.body && req.body.email && req.body.senha && req.body.nome){
            if(await signup({email: req.body.email, senha: req.body.senha, nome: req.body.nome,id: 0})){
                res.send('ok')
            }else{
                res.status(500).send('error')
            }
        }
    }catch(error){
        res.send(error)
    }
})

app.post('/conta/login', async (req:Request, res:Response) => {
    try{
        if(req.body && req.body.email && req.body.senha){
            const conta = await login(req.body.email, req.body.senha)
            if(conta){
                res.send(conta)
            }else{
                res.status(500).send('error')
            }
        }
    }catch(error){
        res.send(error)
    }
})

app.get('/categoria/all', async (req:Request, res:Response) => {
    const categorias = await readAllCategorias()
    res.send(categorias)
})

app.post('/parcela/by-month', async (req:Request, res:Response):Promise<void> => {
    if(req.body){
        const data = await readParcelasByMonth(req.body.idConta, req.body.month, req.body.year)
        res.send(data)
    }
})

app.post('/lancamento/add', async (req:Request, res:Response) => {
    try {
        if(req.body){
            await addLancamento(req.body)
        }
        res.send('ok')
    } catch (error) {
        res.send(error)
    }
})

app.post('/lancamento/remove', async (req:Request, res:Response) => {
    try { //Adicionar idConta
        if(req.body){
            await removeLancamentos(req.body.idsLancamento)
        }
        res.send('ok')
    } catch (error) {
        res.send(error)
    }
})


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

    console.log(await getMonthList(1))

}

// run()
