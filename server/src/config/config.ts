import { isDebug } from "../controller/args"
import fs from 'fs'
import Credential from "../type/Credential"

export const credentials:Credential = JSON.parse(<string><unknown>fs.readFileSync(
    isDebug() 
        ? `${__dirname}/../database/databaseDev.credentials` 
        : `${__dirname}/../database/database.credentials`
))