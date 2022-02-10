import winston, { Logger } from 'winston'

const logger: Logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({stack: true}), 
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({filename: '../../logs/error.log', level: 'error'}),
        new winston.transports.File({filename: '../../logs/info.log', level: 'info'}),
    ]
})

if(process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({format: winston.format.simple()}))
}

export default logger