import bodyParser from 'body-parser'
import express, {Request, Response, Application, Router} from 'express'
import logger from './controller/logger'

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