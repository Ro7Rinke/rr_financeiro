import bodyParser from 'body-parser'
import express, {Request, Response, Application, Router, NextFunction} from 'express'
import { getTokenFromAuthorization, isDebug } from './controller/args'
import { login, loginByJwt, signup, verifyJwt } from './controller/ContaController'
import { addLancamento, removeLancamentos } from './controller/LancamentoController'
import logger from './controller/logger'
import { getMonthList } from './controller/ParcelaController'
import { readAllCategorias } from './dao/CategoriaDAO'
import { readParcelasByMonth } from './dao/ParcelaDAO'
import MonthType from './type/MonthType'
import bcrypt from 'bcrypt'
import { readUsuariosByConta } from './dao/UsuarioDAO'
import { addRecebimento } from './controller/RecebimentoController'
import { readRecebimentosByMonth } from './dao/RecebimentoDAO'
import { startTunnel } from './controller/TunnelController'

const app:Application = express()
const router:Router = express.Router()

const PORT = isDebug() ? 8001 : 8002 //process.env.PORT || 8001

const subdomain = isDebug() ? 'ro7rinke2' : 'ro7rinke'

startTunnel(PORT.toString(), subdomain)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/", router)

app.use((req:Request, res:Response, next:NextFunction) => {

    console.log(req.originalUrl)

    if(req.method != 'POST' 
        || req.originalUrl.includes('/conta/login') 
        || req.originalUrl.includes('/conta/signup')){
        return next()
    } 

    try {
        const jwt = getTokenFromAuthorization(req.headers.authorization)

        const decoded = verifyJwt(jwt)
        if(decoded.idConta > 0)
            return next()
        
        res.status(401).send('Não autorizado')
    } catch (error) {
        res.status(401).send(error)
    }
})

app.get("/", (req:Request, res:Response):void => {
    res.send("It's WORKING!!")
})

app.post('/month-list', async (req:Request, res:Response):Promise<void> => {
    try {
        const {idConta} = verifyJwt(getTokenFromAuthorization(req.headers.authorization))
        // if(req.body){
            const montList:Array<MonthType> = await getMonthList(idConta) 
            res.send(montList)
        // }
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post('/conta/signup', async (req:Request, res:Response) => {
    try{
        if(req.body && req.body.email && req.body.senha && req.body.nome){
            const senhaHash = bcrypt.hashSync(req.body.senha, 10)
            if(await signup({email: req.body.email, senha: senhaHash, nome: req.body.nome,id: 0})){
                res.send('ok')
            }else{
                res.status(500).send('error')
            }
        }
    }catch(error){
        console.log(error)
        res.status(500).send(error)
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

app.post('/conta/login-jwt', async (req:Request, res:Response) => {
    try {
        // if(req.body && req.body.jwt){
        const conta = await loginByJwt(getTokenFromAuthorization(req.headers.authorization))

        if(conta){
            res.send(conta)
        }else{
            res.status(401).send('Não autorizado')
        }
        // }
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/categoria/all', async (req:Request, res:Response) => {
    const categorias = await readAllCategorias()
    res.send(categorias)
})

app.post('/parcela/by-month', async (req:Request, res:Response):Promise<void> => {
    try {
        const {idConta} = verifyJwt(getTokenFromAuthorization(req.headers.authorization))
        if(req.body){
            const data = await readParcelasByMonth(idConta, req.body.month, req.body.year)
            res.send(data)
        }else{
            res.status(500).send('error')
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post('/lancamento/add', async (req:Request, res:Response) => {
    try {
        const {idConta} = verifyJwt(getTokenFromAuthorization(req.headers.authorization))
        const usuarios = await readUsuariosByConta(idConta)
        if(req.body && usuarios.length > 0){
            await addLancamento({...req.body, idConta, idUsuario: usuarios[0].id})
            res.send('ok')
        }else{
            res.status(500).send('error')
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post('/lancamento/remove', async (req:Request, res:Response) => {
    try {
        const {idConta} = verifyJwt(getTokenFromAuthorization(req.headers.authorization))
        if(req.body){
            await removeLancamentos(req.body.idsLancamento, idConta)
            res.send('ok')
        }else{
            res.status(500).send('error')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.post('/recebimento/add', async (req:Request, res:Response) => {
    try {
        const {idConta} = verifyJwt(getTokenFromAuthorization(req.headers.authorization))
        if(req.body){
            await addRecebimento({...req.body, idConta})
            res.send('ok')
        }else{
            res.status(500).send('error')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.post('/recebimento/by-month', async (req:Request, res:Response):Promise<void> => {
    try {
        const {idConta} = verifyJwt(getTokenFromAuthorization(req.headers.authorization))
        if(req.body && req.body.month && req.body.year){
            const data = await readRecebimentosByMonth(idConta, req.body.month, req.body.year)
            res.send(data)
        }else{
            res.status(500).send('error')
        }
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(PORT, ():void => {
    logger.info(`Server Running on PORT:${PORT}`)
})
